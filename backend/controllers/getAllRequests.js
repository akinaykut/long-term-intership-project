import Request from "../models/requests.js";

const getAllRequests = async (req, res) => {
  console.log("getAllRequests is running...");

  try {
    const allRequests = await Request.find();
    res.status(200).json(allRequests);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export default getAllRequests;
