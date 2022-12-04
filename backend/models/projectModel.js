const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
    todos: [
      {
        type: new mongoose.Schema(
          {
            title: {
              type: String,
              required: false,
            },
            info: {
              required: false,
            },
            state: {
              required: false,
            },
            checked: {
              type: Boolean,
              required: false,
            },
          },
          { timestamps: true }
        ),
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);