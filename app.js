require("module-alias/register");

const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const dataRoutes = require("@routes/dataRoutes");
const pushRoutes = require("@routes/pushRoutes");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/data", dataRoutes);
app.use("/api/notification", pushRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
