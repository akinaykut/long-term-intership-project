import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRoutes from "./routes/users.js";
import requestRoutes from "./routes/requests.js";
import loginRoutes from "./routes/login.js";

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

app.use(
  express.json({
    limit: "5mb",
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);

app.use("/users", userRoutes);
app.use("/requests", requestRoutes);
app.use("/login", loginRoutes);

app.get("/", (req, res) => {
  res.send({ name: "Akin Aykut" });
});

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUniFiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
