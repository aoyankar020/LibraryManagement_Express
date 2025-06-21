import { Types } from "mongoose";

export interface IBorrower {
  book: Types.ObjectId;
  quantity: Number;
  dueDate: Date;
}
