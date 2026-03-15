import mongoose, { model } from "mongoose";
const PostSchema = mongoose.Schema(
  {
    postTitle: { type: String, required: true },
    postBody: { type: String, required: true },
  },
  { timestamps: true },
);
export const Post = mongoose.model("Post", PostSchema);
