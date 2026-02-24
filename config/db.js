import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/cmsdb");
    console.log("Database connection created successfully");
  } catch (error) {
    console.log("Error database connectivity", error.message);
    process.exit(1);
  }
};
