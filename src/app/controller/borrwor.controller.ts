import express, { Request, Response } from "express";

export const borrowrouter = express.Router();

// Get All Books
borrowrouter.get("/borrow", (req: Request, res: Response) => {
  res.send("Get All Books");
});
//  Create Book
borrowrouter.post("/borrow", (req: Request, res: Response) => {
  res.send("Create Book");
});
