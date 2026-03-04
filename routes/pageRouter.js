import express from "express";
import {
  homePage,
  aboutPage,
  postPage,
  contactPage,
} from "../controllers/pageController.js";
export const pageRouter = express.Router();
pageRouter.get("/", homePage);
pageRouter.get("/about", aboutPage);
pageRouter.get("/post", postPage);
pageRouter.get("/contact", contactPage);
