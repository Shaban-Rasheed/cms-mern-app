import express from "express";
import { dashboard } from "../controllers/adminController.js";

export const adminRouter = express.Router();

adminRouter.get("/dashboard", dashboard);
