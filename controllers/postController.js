import { Post } from "../models/post.js";

export const allPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};
