import express, { Request, Response } from "express";
import { Book } from "../model/bookModel";
export const bookrouter = express.Router();

// Get All Books
bookrouter.get("/books", async (req: Request, res: Response) => {
  try {
    const result = await Book.find();
    res.status(200).send({
      success: true,
      message: "Books retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//  Create Book
bookrouter.post("/books", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    console.log("Body", body);
    const result = await Book.create(body);

    res.status(200).send({
      success: true,
      message: "Book created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
// Get Book by ID
bookrouter.get("/books/:bookId", async (req: Request, res: Response) => {
  try {
    const id = req.params.bookId;
    const result = await Book.findById(id);
    res.status(200).send({
      success: true,
      message: "Book retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
// Update Book
bookrouter.put("/books/:bookId", async (req: Request, res: Response) => {
  try {
    const id = req.params.bookId;
    const body = req.body;
    const result = await Book.findByIdAndUpdate(id, body, { new: true });
    res.status(200).send({
      success: true,
      message: "Book updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
// Delete Book
bookrouter.delete("/books/:bookId", async (req: Request, res: Response) => {
  try {
    const id = req.params.bookId;
    const result = await Book.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Book deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
