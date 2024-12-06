import express from "express";
import { createActivity, fetchActivity } from "../controllers/activity.js";

const router = express.Router();

router.post("/createActivity", createActivity);
router.get("/activities", fetchActivity);

export default router;
