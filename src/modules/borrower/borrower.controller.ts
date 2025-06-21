import express, { Request, Response } from "express";
import { Borrow } from "./borrower.model";

export const borrowrouter = express.Router();

export const getBorrowSummary = async (req: Request, res: Response) => {
  try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },

      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "book",
        },
      },

      {
        $unwind: "$book",
      },

      {
        $project: {
          _id: 0,
          book: {
            title: "$book.title",
            isbn: "$book.isbn",
          },
          totalQuantity: 1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve borrowed books summary",
      error: (error as Error).message,
    });
  }
};
export const createBorrow = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await Borrow.create(body);
    res.status(200).send({
      success: true,
      message: "Book borrowed successfully",
      data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: (error as Error).message || "Book borrow failed",
    });
  }
};
