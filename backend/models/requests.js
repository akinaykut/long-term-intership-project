import mongoose from "mongoose";

const requestSchema = mongoose.Schema({
  user_id: String,
  officer_id: String,
  request_message: String,
  answer_message: String,
  answer_point: Number,
  officer_point: Number,
  isAnswered: Boolean,
});

const Request = mongoose.model("REQUEST", requestSchema);

export default Request;
