import express from "express";
import path from "node:path";
import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import { connectDB } from "./config/db.js";
// import { User } from "./models/User.js";
import { userRouter } from "./routes/userRouter.js";

dotenv.config();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(userRouter);

connectDB();
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
