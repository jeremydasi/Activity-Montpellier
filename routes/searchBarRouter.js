import express from "express";
import { searchBar } from "../controllers/searchBar.js";
const router = express.Router();

router.get("/search", searchBar);

export default router; 