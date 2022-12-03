const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "GET all projects" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "GET single project" });
});

router.post("/", (req, res) => {
  res.json({ mssg: "POST knew project" });
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a project" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a project" });
});

module.exports = router;
