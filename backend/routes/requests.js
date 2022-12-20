import Request from "../models/requests.js";
import express from "express";
import getAllRequests from "../controllers/getAllRequests.js";
import getOneRequest from "../controllers/getOneRequest.js";
import postRequest from "../controllers/postRequest.js";

const router = express.Router();

/*   https://localhost:5000/requests/     */

router.get("/", getAllRequests);
router.get("/:id", getOneRequest);
router.post("/", postRequest);

export default router;
