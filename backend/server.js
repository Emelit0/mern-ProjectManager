require("dotenv").config();
const express = require("express");
const projectsRoutes = require("./routes/projectRoutes");
const todoRoutes = require("./routes/todoRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.json({ mssg: "App is running" });
});

app.use("/api/projects/", projectsRoutes);
app.use("/api/projects/:id/todos", todoRoutes);
