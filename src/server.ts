import { app } from "./app";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
// ✅ Enable CORS for all origins
app.use(cors());

async function server() {
  try {
    await mongoose.connect(config.database_url!);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

server().catch((err) => console.log(err));
