import { Post } from "../models/post.js";

export const allPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};
export const addPost = async (req, res) => {
  res.render("admin/addpost");
};
export const addPostData = async (req, res) => {
  const { ptitle, pbody } = req.body;
  try {
    const post = new Post({
      postTitle: ptitle,
      postBody: pbody,
    });
    await post.save();
    console.log("pots daved");
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
