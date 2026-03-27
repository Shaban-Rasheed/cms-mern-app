import express from "express";
import {
  addUser,
  getAllUsers,
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/UserController.js";

export const userRouter = express.Router();

userRouter.post("/addUser", addUser);
userRouter.get("/getallusers", getAllUsers);
userRouter.get("/register", registerUser);
userRouter.post("/loginuser", loginUser);
userRouter.get("/logout", logoutUser);
