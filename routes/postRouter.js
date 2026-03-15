import {
  allPosts,
  addPost,
  addPostData,
} from "../controllers/postController.js";
import express from "express";
export const postRouter = express.Router();
postRouter.get("/allposts", allPosts);
postRouter.get("/addpost", addPost);
postRouter.post("/addpost", addPostData);
