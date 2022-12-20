import User from "../models/users.js";
import bcrypt from "bcryptjs";

const postUsers = async (req, res) => {
  console.log("postUsers running...");
  const newUser = new User(req.body);
  console.log(newUser);

  console.log(newUser.password);

  try {
    //hashedPassword
    newUser.password = await bcrypt.hash(newUser.password, 12);
    console.log(newUser.password);
  } catch (error) {
    console.log(err.message);
  }

  await newUser.save();
  res.send({
    message: "new user added",
    user: newUser,
  });
};

export default postUsers;
