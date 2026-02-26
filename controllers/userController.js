import { User } from "../models/User.js";

export const addUser = async (req, res) => {
  try {
    const user = new User({
      firstName: "Kashif",
      lastName: "Usman",
      email: "usman@gmail.com",
      password: "5544sdfsd",
      mobile: "123456789",
      address: "Lahore",
    });
    await user.save();
    res.send("Record has been addes");
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};
export const homePage = (req, res) => {
  res.send("Home Page");
};
export const getAllUsers = async (req, res) => {
  const allUsers = await User.find();
  res.json(allUsers);
};
