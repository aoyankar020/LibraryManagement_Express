import express, { Application, Request, Response } from "express";
import { bookrouter } from "./app/controller/book.controller";
import { borrowrouter } from "./app/controller/borrwor.controller";
export const app: Application = express();
app.use(express.json());

app.use("/api", bookrouter);
app.use("/api", borrowrouter);

app.get("/", (req: Request, res: Response) => {
  res.send("User Home Page");
});
