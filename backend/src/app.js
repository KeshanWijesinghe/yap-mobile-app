const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

// Route imports
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to YAP Mobile App API" });
});

app.use("/api/users", userRoutes);

// Error Handler Middleware
app.use(errorHandler);

module.exports = app;
