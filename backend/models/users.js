import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  tc_kimlik: Number,
  user_type: String,
});

const User = mongoose.model("USER", userSchema);

export default User;
