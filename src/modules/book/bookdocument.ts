import { Document } from "mongoose";
import { BookMethods, IBook } from "./book.interface";

export type BookDocument = Document & IBook & BookMethods;
