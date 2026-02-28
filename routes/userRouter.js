import express from "express";
import {
  addUser,
  getAllUsers,
  homePage,
  registerUser,
} from "../controllers/UserController.js";

export const userRouter = express.Router();

userRouter.get("/", homePage);
userRouter.post("/addusers", addUser);
userRouter.get("/getallusers", getAllUsers);
userRouter.get("/register", registerUser);
