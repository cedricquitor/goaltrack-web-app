const express = require("express");
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController");
const { protect } = require("../middlewares/authMiddleware");

// API routes
// Get and add goal route
router.route("/").get(protect, getGoals).post(protect, setGoal);
// Update and delete goal route
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
