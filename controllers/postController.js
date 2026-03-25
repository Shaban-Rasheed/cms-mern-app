import { Post } from "../models/post.js";

export const allPosts = async (req, res) => {
  const posts = await Post.find();
  res.render("admin/allpost", { posts });
};
export const getOnePost = async (req, res) => {
  const pid = await req.params.postID;
  const getId = await Post.findOne({ _id: pid });
  res.render("post", { postData: getId });
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
