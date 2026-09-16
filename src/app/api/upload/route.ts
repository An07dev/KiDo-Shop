import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import connectToDatabase from '@/lib/mongodb';
import Upload from '@/models/Upload';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, ngrok-skip-browser-warning',
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    // Support 'file' or 'files'
    const file = (formData.get('file') || formData.get('files')) as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'Không tìm thấy file để upload' },
        { status: 400, headers: corsHeaders }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const mimeType = file.type || 'image/png';
    const base64Data = buffer.toString('base64');
    const dataUrl = `data:${mimeType};base64,${base64Data}`;

    // 1. Tùy chọn 1: Nếu có cấu hình ImgBB API Key trong ENV
    if (process.env.IMGBB_API_KEY) {
      try {
        const imgbbForm = new FormData();
        imgbbForm.append('image', base64Data);
        const imgbbRes = await fetch(
          `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
          {
            method: 'POST',
            body: imgbbForm,
          }
        );
        const imgbbJson = await imgbbRes.json();
        if (imgbbJson?.success && imgbbJson?.data?.url) {
          return NextResponse.json(
            {
              success: true,
              message: 'Upload file lên ImgBB thành công',
              data: { url: imgbbJson.data.url },
            },
            { headers: corsHeaders }
          );
        }
      } catch (cloudErr) {
        console.warn('ImgBB upload failed, falling back...', cloudErr);
      }
    }

    // 2. Tùy chọn 2: Nếu có cấu hình Cloudinary trong ENV
    if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_UPLOAD_PRESET) {
      try {
        const cloudForm = new FormData();
        cloudForm.append('file', dataUrl);
        cloudForm.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET);
        const cloudRes = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: 'POST',
            body: cloudForm,
          }
        );
        const cloudJson = await cloudRes.json();
        if (cloudJson?.secure_url) {
          return NextResponse.json(
            {
              success: true,
              message: 'Upload file lên Cloudinary thành công',
              data: { url: cloudJson.secure_url },
            },
            { headers: corsHeaders }
          );
        }
      } catch (cloudErr) {
        console.warn('Cloudinary upload failed, falling back...', cloudErr);
      }
    }

    // 3. Lưu vào MongoDB Atlas dùng chung và ổ đĩa cục bộ
    const rawName = file.name || 'image.png';
    const safeName = rawName.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `${Date.now()}-${safeName}`;

    // Lưu vào MongoDB Atlas để mọi thiết bị/máy chủ khác đều xem được
    try {
      await connectToDatabase();
      await Upload.findOneAndUpdate(
        { filename },
        {
          filename,
          originalName: rawName,
          mimeType,
          size: bytes.byteLength,
          data: base64Data,
        },
        { upsert: true, new: true }
      );
    } catch (dbUploadErr) {
      console.error('Lỗi khi lưu ảnh vào MongoDB Uploads:', dbUploadErr);
    }

    // Ghi thêm vào thư mục public/uploads làm cache cục bộ nếu ổ đĩa có quyền ghi
    try {
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      await mkdir(uploadDir, { recursive: true });
      const filePath = path.join(uploadDir, filename);
      await writeFile(filePath, buffer);
    } catch (fsErr) {
      // Bỏ qua nếu môi trường chỉ đọc (serverless/Vercel)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Upload file thành công',
        data: {
          url: `/uploads/${filename}`,
        },
      },
      { headers: corsHeaders }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Lỗi upload file' },
      { status: 500, headers: corsHeaders }
    );
  }
}