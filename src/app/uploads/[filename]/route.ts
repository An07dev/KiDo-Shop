import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { readFile, writeFile, mkdir } from 'fs/promises';
import connectToDatabase from '@/lib/mongodb';
import Upload from '@/models/Upload';

// Helper to determine Content-Type from filename
function getMimeType(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  switch (ext) {
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.gif':
      return 'image/gif';
    case '.webp':
      return 'image/webp';
    case '.svg':
      return 'image/svg+xml';
    case '.avif':
      return 'image/avif';
    default:
      return 'application/octet-stream';
  }
}

// Minimal fallback transparent 1x1 PNG pixel when an image is permanently unavailable
const FALLBACK_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);

export async function GET(
  request: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params;
    if (!filename) {
      return new NextResponse(FALLBACK_PNG, {
        status: 200,
        headers: { 'Content-Type': 'image/png' },
      });
    }

    const cleanFilename = path.basename(filename);
    const mimeType = getMimeType(cleanFilename);

    // 1. First priority: Check if file already exists in local public/uploads directory
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    const localFilePath = path.join(uploadDir, cleanFilename);

    if (fs.existsSync(localFilePath)) {
      try {
        const fileBuffer = await readFile(localFilePath);
        return new NextResponse(fileBuffer, {
          status: 200,
          headers: {
            'Content-Type': mimeType,
            'Cache-Control': 'public, max-age=31536000, immutable',
          },
        });
      } catch (readErr) {
        console.warn('Could not read local file, falling back to MongoDB:', readErr);
      }
    }

    // 2. Second priority: Query MongoDB Atlas shared database
    try {
      await connectToDatabase();
      const doc = await Upload.findOne({ filename: cleanFilename });

      if (doc && doc.data) {
        // Strip data:image/...;base64, prefix if present
        const base64Str = doc.data.includes(';base64,')
          ? doc.data.split(';base64,')[1]
          : doc.data;

        const buffer = Buffer.from(base64Str, 'base64');
        const resolvedMime = doc.mimeType || mimeType;

        // Cache to local disk asynchronously for faster subsequent requests if writable
        try {
          if (!fs.existsSync(uploadDir)) {
            await mkdir(uploadDir, { recursive: true });
          }
          await writeFile(localFilePath, buffer);
        } catch (cacheErr) {
          // Ignored on read-only/serverless filesystems
        }

        return new NextResponse(buffer, {
          status: 200,
          headers: {
            'Content-Type': resolvedMime,
            'Cache-Control': 'public, max-age=31536000, immutable',
          },
        });
      }
    } catch (dbErr) {
      console.error('Error fetching image from MongoDB Uploads:', dbErr);
    }

    // 3. Fallback: Return clean 1x1 image instead of a broken 404 error
    return new NextResponse(FALLBACK_PNG, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=300',
      },
    });
  } catch (error: any) {
    console.error('Global error in /uploads route:', error);
    return new NextResponse(FALLBACK_PNG, {
      status: 200,
      headers: { 'Content-Type': 'image/png' },
    });
  }
}
