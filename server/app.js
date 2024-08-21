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


// Routes
app.get("/", (req, res) => {
  res.send(" Welcome to Locally");
});

app.use("/events", eventsController);

// 404 Page
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// Export
module.exports = app;

