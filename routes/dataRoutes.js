const express = require("express");
const router = express.Router();

// Mock data
const mockData = [
  { id: 1, name: "Item 1", description: "This is item 1" },
  { id: 2, name: "Item 2", description: "This is item 2" },
  { id: 3, name: "Item 3", description: "This is item 3" },
];

// Route to get mock data
router.get("/", (req, res) => {
  res.json(mockData);
});

module.exports = router;
