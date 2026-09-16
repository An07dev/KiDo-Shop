import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILocationWard extends Document {
  province: string;
  district: string;
  normalizedKey: string;
  wards: string[];
  updatedAt: Date;
}

const LocationWardSchema: Schema = new Schema(
  {
    province: { type: String, required: true },
    district: { type: String, required: true },
    normalizedKey: { type: String, required: true, unique: true, index: true },
    wards: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);

const LocationWard: Model<ILocationWard> =
  mongoose.models.LocationWard || mongoose.model<ILocationWard>('LocationWard', LocationWardSchema);

export default LocationWard;
