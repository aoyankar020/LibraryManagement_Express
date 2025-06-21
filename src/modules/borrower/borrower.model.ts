import mongoose, { Schema } from "mongoose";
import { IBorrower } from "./borrower.interface";
import { Book } from "../book/book.model";

const borrowSchema = new mongoose.Schema<IBorrower>(
  {
    book: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Book",
    },
    quantity: { type: Number, required: true },
    dueDate: { type: Date, required: true },
  },
  { timestamps: true, versionKey: false }
);

// Checking Availability of Book to borrow
borrowSchema.pre("save", async function (next) {
  const borrowQuantity = this.quantity;
  const bookId = this.book;

  try {
    // Getting Book details from book model
    const book = await Book.findById(bookId);
    // Checking does book exist
    if (!book) {
      return next(new Error("Book not found."));
    }
    // when book exist
    // Ensure both are treated as numbers
    const bookStock: number = typeof book.copies === "number" ? book.copies : 0;
    const quantityToBorrow: number =
      typeof borrowQuantity === "number" ? borrowQuantity : 0;

    if (quantityToBorrow <= bookStock) {
      book.copies = bookStock - quantityToBorrow;

      book.updateAvailability();
      await book.save();
      return next(); // Everything okay, proceed to save
    } else {
      return next(new Error("Not enough copies available to borrow."));
    }
  } catch (err) {
    console.log(err);
    return next(new Error("Something happend Wrong .")); // In case Book.findById throws
  }
});

export const Borrow = mongoose.model<IBorrower>("Borrow", borrowSchema);
