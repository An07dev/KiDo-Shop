const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://bigmansale2_db_user:LQBnps6DkzVpKe84@cluster0.o9kuvob.mongodb.net/webstore?retryWrites=true&w=majority&appName=Cluster0';

async function seedWards() {
  console.log('🔗 Đang kết nối tới MongoDB...');
  await mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
  });
  console.log('✅ Đã kết nối MongoDB thành công!');

  const jsonPath = path.join(__dirname, '..', 'src', 'data', 'vietnamWards.json');
  if (!fs.existsSync(jsonPath)) {
    throw new Error('Không tìm thấy file src/data/vietnamWards.json! Hãy chạy node scripts/generate_vietnam_wards.js trước.');
  }

  const raw = fs.readFileSync(jsonPath, 'utf8');
  const wardsMap = JSON.parse(raw);

  const collection = mongoose.connection.collection('locationwards');
  await collection.createIndex({ normalizedKey: 1 }, { unique: true });

  const operations = [];
  for (const [key, wards] of Object.entries(wardsMap)) {
    operations.push({
      updateOne: {
        filter: { normalizedKey: key },
        update: {
          $set: {
            normalizedKey: key,
            wards: wards,
            updatedAt: new Date(),
          },
        },
        upsert: true,
      },
    });
  }

  console.log(`📦 Đang lưu ${operations.length} đơn vị quận huyện vào MongoDB...`);
  const result = await collection.bulkWrite(operations);
  console.log('🎉 Hoàn tất nạp dữ liệu vào MongoDB!');
  console.log(`- Đã thêm mới: ${result.upsertedCount}`);
  console.log(`- Đã cập nhật: ${result.modifiedCount}`);

  await mongoose.disconnect();
  console.log('🔌 Đã ngắt kết nối an toàn.');
}

seedWards().catch((err) => {
  console.error('❌ Lỗi:', err);
  process.exit(1);
});
