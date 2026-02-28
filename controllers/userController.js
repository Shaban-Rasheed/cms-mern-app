import { User } from "../models/User.js";

export const addUser = async (req, res) => {
  const { fname, lname, pwd, mail, mob, addr } = req.body;
  try {
    const user = new User({
      firstName: fname,
      lastName: lname,
      email: mail,
      password: pwd,
      mobile: mob,
      address: addr,
    });
    await user.save();
    // res.send("Record has been addes");
    res.redirect("/");
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
export const registerUser = (req, res) => {
  res.render("register");
};
