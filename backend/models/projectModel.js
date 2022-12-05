const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    info: {
      type: String,
      required: false,
    },
    checked: {
      type: Boolean,
      required: false,
    },
    date: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
    todos: [todoSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
