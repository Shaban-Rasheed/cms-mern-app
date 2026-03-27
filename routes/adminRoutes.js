import express from "express";
import { dashboard } from "../controllers/adminController.js";
import { isAuth } from "../middlewares/auth.js";
export const adminRouter = express.Router();

adminRouter.get("/dashboard", isAuth, dashboard);
