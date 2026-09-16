const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIcons() {
  const source = path.join(__dirname, '..', 'public', 'uploads', '1788857168354-ShopBig_Logo_Mau_1.jpg');
  const pubDir = path.join(__dirname, '..', 'public');

  if (!fs.existsSync(source)) {
    console.error('Source logo not found:', source);
    return;
  }

  console.log('Generating PWA icons from:', source);

  // 1. icon-192.png
  await sharp(source)
    .resize(192, 192, { fit: 'cover' })
    .png()
    .toFile(path.join(pubDir, 'icon-192.png'));
  console.log('✓ Created public/icon-192.png');

  // 2. icon-512.png
  await sharp(source)
    .resize(512, 512, { fit: 'cover' })
    .png()
    .toFile(path.join(pubDir, 'icon-512.png'));
  console.log('✓ Created public/icon-512.png');

  // 3. icon-maskable.png (with 10% padding for Android adaptive icons safe zone)
  const innerSize = Math.round(512 * 0.8);
  const padding = Math.round((512 - innerSize) / 2);
  const resizedInner = await sharp(source)
    .resize(innerSize, innerSize, { fit: 'contain', background: { r: 15, g: 17, b: 23, alpha: 1 } })
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 15, g: 17, b: 23, alpha: 1 }
    }
  })
    .composite([{ input: resizedInner, top: padding, left: padding }])
    .png()
    .toFile(path.join(pubDir, 'icon-maskable.png'));
  console.log('✓ Created public/icon-maskable.png');

  // 4. apple-touch-icon.png (180x180)
  await sharp(source)
    .resize(180, 180, { fit: 'cover' })
    .png()
    .toFile(path.join(pubDir, 'apple-touch-icon.png'));
  console.log('✓ Created public/apple-touch-icon.png');

  console.log('All PWA icons successfully generated!');
}

generateIcons().catch(console.error);
