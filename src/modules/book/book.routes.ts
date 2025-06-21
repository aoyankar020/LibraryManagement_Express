import express from "express";
import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from "./book.controller";

export const bookroute = express.Router();

bookroute.get("/books", getBooks);
bookroute.post("/books", createBook);
bookroute.put("/books/:bookId", updateBook);
bookroute.get("/books/:bookId", getBook);
bookroute.delete("/books/:bookId", deleteBook);
