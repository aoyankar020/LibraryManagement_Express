import mongoose, { Model } from "mongoose";

import { BookDocument } from "./bookdocument";
import { Borrow } from "../borrower/borrower.model";

const bookSchema = new mongoose.Schema<BookDocument, Model<BookDocument>>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      required: true,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: {
      type: Number,
      min: [0, "Copies must be a positive number"],
      required: true,
    },
    available: { type: Boolean, default: true },
  },
  { versionKey: false, timestamps: true }
);
bookSchema.method("updateAvailability", function () {
  this.available = this.copies > 0;
  return this.available;
});

bookSchema.post("findOneAndDelete", async function (doc) {
  await Borrow.deleteMany({ book: doc._id });
});
export const Book = mongoose.model<BookDocument>("Book", bookSchema);
