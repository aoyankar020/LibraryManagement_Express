import { Types } from "mongoose";

export interface IBorrower {
  book: Types.ObjectId;
  quantity: number;
  dueDate: Date;
}
