import Request from "../models/requests.js";

const getOneRequest = async (req, res) => {
  console.log("getOneRequest is running...");

  try {
    console.log(req.params.id);
    const request = await Request.filter((item) => item.id === req.params.id);
    res.status(200).json(request);
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
};

export default getOneRequest;
