import express from "express";
import getUsers from "../controllers/getUsers.js";
import postUsers from "../controllers/postUsers.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", postUsers);

export default router;
