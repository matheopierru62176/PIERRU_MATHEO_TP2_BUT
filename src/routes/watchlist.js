const express = require("express");
const router = express.Router();
const { createWatchlist } = require("../controllers/watchlist");

router.post("/create", createWatchlist);

module.exports = router;
