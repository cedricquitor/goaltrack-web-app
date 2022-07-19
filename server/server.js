const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// Init database connection
connectDB();

// Init express
const app = express();

// Body data access middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Init goal routes
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Error handler middleware
app.use(errorHandler);

app.listen(PORT, console.log(`Server running on port: ${PORT}`));
