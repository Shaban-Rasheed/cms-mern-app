import express from "express";
import {
  homePage,
  aboutPage,
  postPage,
  contactPage,
  loginPage,
  registerPage,
} from "../controllers/pageController.js";
export const pageRouter = express.Router();
pageRouter.get("/", homePage);
pageRouter.get("/about", aboutPage);
pageRouter.get("/post", postPage);
pageRouter.get("/contact", contactPage);
pageRouter.get("/login", loginPage);
pageRouter.get("/register", registerPage);
