import express from "express";
import {
  addUser,
  getAllUsers,
  homePage,
} from "../controllers/UserController.js";

export const userRouter = express.Router();

userRouter.get("/", homePage);
userRouter.get("/addusers", addUser);
userRouter.get("/getallusers", getAllUsers);
