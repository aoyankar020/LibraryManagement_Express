import { Request, Response } from "express";
import { app } from "./app";

import mongoose from "mongoose";

const port = process.env.PORT || 3000;

async function main() {
  const connection = await mongoose.connect(
    "mongodb+srv://aoyankar36:admin@cluster0.wc1urj7.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0"
  );

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main().catch((err) => console.log(err));
