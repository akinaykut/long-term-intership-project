import Users from "../models/users.js";

const getUsers = async (req, res) => {
  console.log("getUsers running...");

  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export default getUsers;
