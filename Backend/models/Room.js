import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  roomNumber: { type: Number, required: true, unique: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  images: { type: [String] },
  availability: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model('Room', RoomSchema);
