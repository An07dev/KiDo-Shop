import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUpload extends Document {
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  data: string; // Base64 data string
  createdAt: Date;
  updatedAt: Date;
}

const UploadSchema = new Schema<IUpload>(
  {
    filename: { type: String, required: true, unique: true, index: true },
    originalName: { type: String, default: '' },
    mimeType: { type: String, default: 'image/jpeg' },
    size: { type: Number, default: 0 },
    data: { type: String, required: true },
  },
  { timestamps: true }
);

const Upload: Model<IUpload> =
  mongoose.models.Upload || mongoose.model<IUpload>('Upload', UploadSchema);

export default Upload;
