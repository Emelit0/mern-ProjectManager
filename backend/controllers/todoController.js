const Project = require("../models/projectModel");
const mongoose = require("mongoose");

const getTodos = async (req, res) => {
  const todos = await Project.find({ todos });

  if (!todos) {
    return res.status(404).json({ error: "no todos found" });
  }

  res.status(200).json(todos);
};

const deleteTodos = async (req, res) => {
  const todos = await Project.remove({});

  res.status(200).json(todos);
};

const getTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such todo" });
  }

  const todo = await Todos.findById(id);

  if (!todo) {
    return res.status(404).json({ error: "no such todo" });
  }

  res.status(200).json(todo);
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "todo not found" });
  }

  const todo = await Todos.findByIdAndDelete({ _id: id });

  if (!todo) {
    return res.status(404).json({ error: "todo not found" });
  }

  res.status(200).json(todo);
};

const createTodo = async (req, res) => {
  const { id } = req.params;
  const { title, info, checked, date } = req.body;
  console.log(req.params);
  try {
    const todo = await Project.findByIdAndUpdate(
      { _id: id },
      {
        $push: {
          "Project.todos": {
            title: title,
            info: info,
            checked: checked,
            date: date,
          },
        },
      }
    );
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "couldnt find todo" });
  }

  const todo = await Todos.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!todo) {
    return res.status(400).json({ error: "couldnt find todo" });
  }

  res.status(200).json(todo);
};

module.exports = {
  getTodo,
  getTodos,
  deleteTodo,
  deleteTodos,
  createTodo,
  updateTodo,
};
