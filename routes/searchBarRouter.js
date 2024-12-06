const express = require("express");
const { searchBar } = require("../controllers/searchBar");
const router = express.Router();

router.get("/search", searchBar);

export default searchBar;