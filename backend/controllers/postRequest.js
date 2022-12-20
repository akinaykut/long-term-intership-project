import Request from "../models/requests.js";

const postRequest = (req, res) => {
  console.log("postRequest is running...");

  const newRequest = new Request(req.body);
  console.log(newRequest);
  newRequest.save();
  res.send({
    message: "new request added",
    request: newRequest,
  });
};

export default postRequest;
