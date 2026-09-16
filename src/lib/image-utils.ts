/**
 * Image processing utilities for client-side compression and optimization.
 * Reduces 5-15MB camera photos down to lightweight Web-ready images (100-300KB)
 * in milliseconds before sending to /api/upload.
 */

export interface CompressedImageResult {
  blob: Blob;
  dataUrl: string;
}

export async function compressImage(
  file: File,
  maxWidth = 1600,
  quality = 0.85
): Promise<CompressedImageResult> {
  // If not running in a browser or not an image file, return original with FileReader
  if (typeof window === 'undefined' || !file.type.startsWith('image/')) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve({ blob: file, dataUrl: (reader.result as string) || '' });
      reader.onerror = () => resolve({ blob: file, dataUrl: '' });
      reader.readAsDataURL(file);
    });
  }

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      if (!src) {
        resolve({ blob: file, dataUrl: '' });
        return;
      }

      const img = new Image();
      img.onload = () => {
        try {
          let { width, height } = img;
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');

          if (!ctx) {
            resolve({ blob: file, dataUrl: src });
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);

          // Use image/jpeg for photos, image/png if original is png and has transparency
          const mimeType = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
          const dataUrl = canvas.toDataURL(mimeType, quality);

          canvas.toBlob(
            (blob) => {
              resolve({
                blob: blob || file,
                dataUrl,
              });
            },
            mimeType,
            quality
          );
        } catch (canvasErr) {
          console.warn('Canvas resize failed, returning original:', canvasErr);
          resolve({ blob: file, dataUrl: src });
        }
      };

      img.onerror = () => {
        resolve({ blob: file, dataUrl: src });
      };

      img.src = src;
    };

    reader.onerror = () => {
      resolve({ blob: file, dataUrl: '' });
    };

    reader.readAsDataURL(file);
  });
}
