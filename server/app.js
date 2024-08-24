//Dependencies 
const cors = require("cors");
const express = require("express");

//Configuration
const app = express();

//Controllers
const eventsController = require("./controllers/eventsController");
const usersController = require("./controllers/usersController");
const friendsController = require("./controllers/friendsController");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/events", eventsController);
app.use("/users", usersController);
app.use("/friendship", friendsController);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Locally");
});

// 404 Page
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// Export
module.exports = app;