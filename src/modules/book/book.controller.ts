import express, { Request, Response } from "express";
import { Book } from "./book.model";
import { formatErrorResponse } from "./formatErrorResponse";
export const bookrouter = express.Router();

// ==================== Process One ===================
export const getBooks = async (req: Request, res: Response) => {
  try {
    const { filter, sortBy = "createdAt", sort = "asc", limit } = req.query;

    const query: any = {};

    if (filter) {
      // Adding genere field with the value of filter
      query.genre = filter;
    }
    const sortOrder = sort === "asc" ? 1 : -1;

    const sortOptions: Record<string, 1 | -1> = {};
    if (sortBy) {
      sortOptions[sortBy as string] = sortOrder;
    }

    const limitNumber = limit ? parseInt(limit as string) : 10;

    const data = await Book.find(query).sort(sortOptions).limit(limitNumber);

    res.status(200).send({
      success: true,
      message: "Books retrieved successfully",
      data,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
export const createBook = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    //  --------- process 1 ---------
    // const result =new Book(body)
    // await result.save();
    //  --------- process 2 ---------
    const data = await Book.create(body);

    res.status(200).send({
      success: true,
      message: "Book created successfully",
      data,
    });
  } catch (error: any) {
    const formatted = formatErrorResponse(error);
    res.status(400).send(formatted);
  }
};
export const updateBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.bookId;
    const body = req.body;
    const data = await Book.findByIdAndUpdate(id, body, { new: true });
    res.status(200).send({
      success: true,
      message: "Book updated successfully",
      data,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.bookId;
    const data = await Book.findById(id);
    if (data) {
      res.status(200).send({
        success: true,
        message: "Book deleted successfully",
        data,
      });
    } else {
      res.status(200).send({
        success: true,
        message: "No Book Found",
      });
    }
  } catch (error) {
    res.status(200).send({
      success: true,
      message: "Something wend wrong",
    });
  }
};
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.bookId;

    await Book.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
