const express = require("express");
const items = require("./db");
const router = express.Router();

router.get("/items", (req, res, next) => {
  return res.status(200).json({
    items,
  });
});

module.exports = router;
