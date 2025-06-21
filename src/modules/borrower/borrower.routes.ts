import express from "express";

import { createBorrow, getBorrowSummary } from "./borrower.controller";

export const borrowerroute = express.Router();

borrowerroute.get("/borrow", getBorrowSummary);
borrowerroute.post("/borrow", createBorrow);
