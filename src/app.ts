import express, { Application, Request, Response } from "express";

import { routes } from "./modules/routes/routes";
export const app: Application = express();
app.use(express.json());

app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.send("User Home Page");
});
