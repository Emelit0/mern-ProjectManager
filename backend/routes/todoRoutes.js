const express = require("express");
const Project = require("../models/projectModel");
const {
  getTodo,
  deleteTodos,
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.get("/", getTodos);

router.delete("/", deleteTodos);

router.get("/:id", getTodo);

router.post("/:id/todos", createTodo);

router.delete("/:id/todos/:todoid", deleteTodo);

router.patch("/:id/todos/:todoid", updateTodo);

module.exports = router;
