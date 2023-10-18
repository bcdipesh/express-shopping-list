const express = require("express");
const items = require("./db");
const router = express.Router();

router.get("/items", (req, res, next) => {
  return res.status(200).json({
    items,
  });
});

router.post("/items", (req, res, next) => {
  if (req.body) {
    items.push(req.body);
  }

  return res.status(201).json({
    added: req.body,
  });
});

module.exports = router;
