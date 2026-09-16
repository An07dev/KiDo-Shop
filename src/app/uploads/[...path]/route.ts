import { NextRequest, NextResponse } from 'next/server';
import { readFile, stat } from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const params = await context.params;
    const pathSegments = params.path || [];

    if (!pathSegments || pathSegments.length === 0) {
      return new NextResponse('Bad Request', { status: 400 });
    }

    const safePath = pathSegments.join('/');

    // Security check: Prevent directory traversal attack
    if (safePath.includes('..') || safePath.includes(':') || safePath.startsWith('/')) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    // Check primary public/uploads location first, then data/uploads fallback
    const primaryPath = path.join(process.cwd(), 'public', 'uploads', safePath);
    const backupPath = path.join(process.cwd(), 'data', 'uploads', safePath);

    let fileBuffer: Buffer | null = null;

    try {
      const fileStat = await stat(primaryPath);
      if (fileStat.isFile()) {
        fileBuffer = await readFile(primaryPath);
      }
    } catch {
      try {
        const fileStat = await stat(backupPath);
        if (fileStat.isFile()) {
          fileBuffer = await readFile(backupPath);
        }
      } catch {
        // File not found in either directory
      }
    }

    if (!fileBuffer) {
      return new NextResponse('File Not Found', { status: 404 });
    }

    // Determine content type based on extension
    const ext = path.extname(safePath).toLowerCase();
    const mimeMap: Record<string, string> = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.webp': 'image/webp',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon',
      '.avif': 'image/avif',
      '.bmp': 'image/bmp',
      '.mp4': 'video/mp4',
      '.webm': 'video/webm',
      '.pdf': 'application/pdf',
      '.json': 'application/json',
    };

    const contentType = mimeMap[ext] || 'application/octet-stream';

    return new NextResponse(new Uint8Array(fileBuffer), {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Accept-Ranges': 'bytes',
      },
    });
  } catch (error: any) {
    console.error('[Uploads Route] Error serving file:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
