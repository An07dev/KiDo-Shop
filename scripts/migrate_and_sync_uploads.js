const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Determine database URIs to sync
const envFile = fs.readFileSync('.env', 'utf8');
const match = envFile.match(/MONGODB_URI=(.+)/);
const defaultUri = match ? match[1].trim() : '';

let tenantUri = '';
try {
  const tenantConfig = JSON.parse(fs.readFileSync('data/tenant_config.json', 'utf8'));
  tenantUri = tenantConfig.mongoUri;
} catch (e) {}

const targetUris = [tenantUri, defaultUri].filter(Boolean);

async function syncUploadsAndReviews() {
  console.log('🚀 Bắt đầu quá trình đồng bộ hình ảnh và chuẩn hóa đánh giá...');

  // 1. Scan public/uploads directory
  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
  const files = fs.existsSync(uploadsDir)
    ? fs.readdirSync(uploadsDir).filter((f) => !f.endsWith('.txt'))
    : [];

  console.log(`📁 Tìm thấy ${files.length} tệp tin trong thư mục public/uploads.`);

  for (const uri of Array.from(new Set(targetUris))) {
    const dbName = uri.split('/').pop()?.split('?')[0] || 'unknown';
    console.log(`\n🔗 Đang kết nối tới CSDL: ${dbName}...`);

    const conn = await mongoose.createConnection(uri).asPromise();
    const db = conn.db;

    // A. Chuẩn hóa reviews có status: undefined -> status: 'approved'
    const updateResult = await db.collection('reviews').updateMany(
      { $or: [{ status: { $exists: false } }, { status: null }, { status: undefined }] },
      { $set: { status: 'approved' } }
    );
    console.log(`✅ [Reviews] Đã cập nhật ${updateResult.modifiedCount} đánh giá sang trạng thái 'approved'.`);

    // B. Đồng bộ file ảnh từ public/uploads vào MongoDB uploads collection
    let syncedCount = 0;
    for (const filename of files) {
      try {
        const filePath = path.join(uploadsDir, filename);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) continue;

        const ext = path.extname(filename).toLowerCase();
        let mimeType = 'image/jpeg';
        if (ext === '.png') mimeType = 'image/png';
        else if (ext === '.webp') mimeType = 'image/webp';
        else if (ext === '.gif') mimeType = 'image/gif';
        else if (ext === '.svg') mimeType = 'image/svg+xml';

        const buffer = fs.readFileSync(filePath);
        const base64Data = buffer.toString('base64');

        await db.collection('uploads').updateOne(
          { filename },
          {
            $set: {
              filename,
              originalName: filename,
              mimeType,
              size: stat.size,
              data: base64Data,
              updatedAt: new Date(),
            },
            $setOnInsert: {
              createdAt: new Date(),
            },
          },
          { upsert: true }
        );
        syncedCount++;
      } catch (fErr) {
        console.warn(`⚠️ Lỗi khi đồng bộ file ${filename}:`, fErr.message);
      }
    }
    console.log(`✅ [Uploads] Đã đồng bộ ${syncedCount}/${files.length} ảnh lên CSDL ${dbName}!`);

    await conn.close();
  }

  console.log('\n🎉 Quá trình đồng bộ hoàn tất thành công 100%!');
  process.exit(0);
}

syncUploadsAndReviews().catch((err) => {
  console.error('❌ Lỗi tiến trình:', err);
  process.exit(1);
});
