import express from "express";
import { createActivity, fetchActivity } from "../controllers/activity.js";

const router = express.Router();

router.post("/createActivity", createActivity);
router.get("/", fetchActivity);

export default router;
