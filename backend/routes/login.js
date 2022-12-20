import express from "express";

const router = express.Router();

// localhost:5000/login

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

export default router;
