const fs = require('fs');
const path = require('path');

/**
 * Script tải toàn bộ danh mục Phường / Xã của 63 Tỉnh thành và lưu trữ cục bộ vào file JSON
 * Giúp hệ thống hoạt động hoàn toàn Offline 100% không phụ thuộc vào bất kỳ API ngoại vi nào
 */
async function generateOfflineWards() {
  console.log('Đang tải dữ liệu từ https://provinces.open-api.vn/api/?depth=3 ...');
  const res = await fetch('https://provinces.open-api.vn/api/?depth=3');
  if (!res.ok) {
    throw new Error(`Tải dữ liệu thất bại: HTTP ${res.status}`);
  }
  const openData = await res.json();

  const normalize = (str) =>
    (str || '')
      .toLowerCase()
      .replace(/[đĐ]/g, 'd')
      .replace(/^(tỉnh|thành phố|quận|huyện|thị xã|tp\.?)\s+/i, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '');

  const map = {};

  // 1. Ingest from open-api
  for (const prov of openData) {
    const pNorm = normalize(prov.name);
    for (const dist of prov.districts || []) {
      const dNorm = normalize(dist.name);
      const wardNames = (dist.wards || []).map((w) => w.name);
      if (wardNames.length > 0) {
        map[`${pNorm}__${dNorm}`] = wardNames;
        if (!map[dNorm]) map[dNorm] = wardNames;
      }
    }
  }

  // 2. Custom mappings & fallback for merged/island districts
  const aliases = {
    datdo: map['longdat'] || [],
    longdien: map['longdat'] || [],
    yendung: map['bacgiang'] || [],
    myloc: map['namdinh'] || [],
    cualo: map['vinh'] || [],
    dongson: map['thanhhoa'] || [],
    ninhbinh: map['hoalu'] || [],
    nongson: map['queque'] || ['Xã Quế Lộc', 'Xã Quế Trung', 'Xã Sơn Viên', 'Xã Phước Ninh', 'Xã Ninh Phước'],
    locha: map['thachha'] || ['Thị trấn Lộc Hà', 'Xã Thạch Kim', 'Xã Mai Phụ', 'Xã Hộ Độ'],
    cattien: map['dahuoai'] || ['Thị trấn Cát Tiên', 'Xã Gia Viễn', 'Xã Nam Ninh', 'Xã Tiên Hoàng'],
    dateh: map['dahuoai'] || ['Thị trấn Đạ Tẻh', 'Xã An Nhơn', 'Xã Đạ Lây', 'Xã Đạ Kho'],
    namdong: map['phuloc'] || ['Thị trấn Khe Tre', 'Xã Hương Phú', 'Xã Hương Xuân', 'Xã Hương Lộc'],
    hue: [...(map['thuanhoa'] || []), ...(map['phuxuan'] || [])],
    bachlongvi: ['Khu vực trung tâm Huyện Bạch Long Vĩ'],
    hoangsa: ['Khu vực Huyện đảo Hoàng Sa'],
    condao: ['Khu vực trung tâm Huyện Côn Đảo'],
    phuquy: ['Xã Tam Thanh', 'Xã Ngũ Phụng', 'Xã Long Hải'],
    lyson: ['Xã An Vĩnh', 'Xã An Hải', 'Xã An Bình'],
    conco: ['Khu vực Huyện đảo Cồn Cỏ'],
  };

  for (const [key, val] of Object.entries(aliases)) {
    if (val && val.length > 0) {
      map[key] = val;
    }
  }

  const dir = path.join(__dirname, '..', 'src', 'data');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const filePath = path.join(dir, 'vietnamWards.json');
  fs.writeFileSync(filePath, JSON.stringify(map), 'utf8');

  const stats = fs.statSync(filePath);
  console.log('✅ Đã xuất dữ liệu Offline thành công tại:', filePath);
  console.log('📊 Kích thước file:', (stats.size / 1024).toFixed(1), 'KB');
  console.log('🔑 Tổng số index quận huyện:', Object.keys(map).length);
}

generateOfflineWards().catch((err) => {
  console.error('❌ Lỗi:', err);
  process.exit(1);
});
