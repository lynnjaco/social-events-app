//dependencies 
const cors = require("cors");
const express = require("express");

//configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//controllers

const eventsController = require("./controllers/eventsController")
const usersController = require("../server/controllers/usersController");
const friendsController = require("../server/controllers/friendsController");



// Routes
app.get("/", (req, res) => {
  res.send(" Welcome to Locally");
});

app.use("/events", eventsController);

app.use("/users", usersController);

app.use("/friendship", friendsController);

// 404 Page
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// Export
module.exports = app;

