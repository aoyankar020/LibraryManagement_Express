import express from "express";
import { bookroute } from "../book/book.routes";
import { borrowerroute } from "../borrower/borrower.routes";

export const routes = express.Router();
routes.use("/api", bookroute);
routes.use("/api", borrowerroute);
