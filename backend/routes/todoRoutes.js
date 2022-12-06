const express = require("express");
const Todo = require("../models/todoModel");
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

router.delete("/:id", deleteTodo);

router.patch("/:id/todos/:todoid", updateTodo);

module.exports = router;
