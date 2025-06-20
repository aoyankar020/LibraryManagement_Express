import mongoose, { model } from "mongoose";

const borrowSchema = new mongoose.Schema({
  book: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  quantity: { type: Number, required: true },
  dueDate: { type: Date, required: true },
});
export const Borrow = mongoose.model("Borrow", borrowSchema);
