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

router.get("/items/:name", (req, res, next) => {
  const item = items.find(
    (item) => item.name === req.params.name.toLowerCase()
  );

  return res.status(200).json({
    item,
  });
});

router.patch("/items/:name", (req, res, next) => {
  let itemIndex = items.findIndex(
    (item) => item.name === req.params.name.toLowerCase()
  );

  if (itemIndex !== -1) {
    items[itemIndex] = {
      name: req.body.name || items[itemIndex].name,
      price: req.body.price || items[itemIndex].price,
    };
  }

  return res.status(200).json({
    updated: items[itemIndex],
  });
});

router.delete("/items/:name", (req, res, next) => {
  let itemIndex = items.findIndex(
    (item) => item.name === req.params.name.toLowerCase()
  );

  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
  }

  return res.status(200).json({
    message: "Deleted",
  });
});

module.exports = router;
