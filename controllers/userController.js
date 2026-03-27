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
    res.redirect("/login");
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

export const getAllUsers = async (req, res) => {
  const allUsers = await User.find();
  res.json(allUsers);
};
export const registerUser = (req, res) => {
  res.render("register");
};

export const loginUser = async (req, res) => {
  const { mail, pwd } = req.body;

  try {
    const user = await User.findOne({
      email: mail,
    });

    if (user && user.password == pwd) {
      req.session.user = {
        id: user._id,
        email: user.email,
      };
      res.redirect("/dashboard");
    } else {
      res.send("<h1>Invalid Email or Password</h1>");
    }
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};
export const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
};
