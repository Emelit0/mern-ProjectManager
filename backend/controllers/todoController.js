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
  const id = req.params.id;
  const todoid = req.params.todoid;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "couldnt find todo" });
  }
  try {
    const todo = await Project.findOneAndUpdate(
      { _id: id, "todos._id": todoid },
      {
        $pull: {
          todos: { _id: todoid },
        },
      },
      { new: true }
    );

    if (!todo) {
      return res.status(400).json({ error: "couldnt find todo" });
    }
    res.status(200).json(todo);
  } catch {
    res.status(400).json({ error: "could not get todo" });
  }
};

const createTodo = async (req, res) => {
  const { id } = req.params;
  const { title, info, checked, date } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "id not valid" });
  }
  try {
    const todo = await Project.findByIdAndUpdate(
      { _id: id },
      {
        $push: {
          todos: {
            title: title,
            info: info,
            checked: checked,
            date: date,
          },
        },
      },
      { new: true }
    );

    if (!todo) {
      return res
        .status(400)
        .json({ error: "coul not execute operation on todo" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  const todoid = req.params.todoid;
  const { title, info, checked, date } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "couldnt find todo" });
  }
  try {
    const todo = await Project.findOneAndUpdate(
      { _id: id, "todos._id": todoid },
      {
        $set: {
          "todos.$.title": title,
          "todos.$.info": info,
          "todos.$.checked": checked,
          "todos.$.date": date,
        },
      },
      { new: true }
    );

    if (!todo) {
      return res.status(400).json({ error: "couldnt find todo" });
    }
    res.status(200).json(todo);
  } catch {
    res.status(400).json({ error: "could not get todo" });
  }
};

module.exports = {
  getTodo,
  getTodos,
  deleteTodo,
  deleteTodos,
  createTodo,
  updateTodo,
};
