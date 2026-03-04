import express from "express";
import {
  addUser,
  getAllUsers,
  registerUser,
} from "../controllers/UserController.js";

export const userRouter = express.Router();

userRouter.post("/addusers", addUser);
userRouter.get("/getallusers", getAllUsers);
userRouter.get("/register", registerUser);
