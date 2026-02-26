const express = require('express');
const router = express.Router();
const { createWorkout, getWorkoutsByUser } = require('../controllers/workoutsController');
const { protect } = require('../middleware/auth.middleware');

// create a workout (protected)
router.post('/', protect, createWorkout);

// read workouts for a user (protected, userId in params)
router.get('/user/:userId', protect, getWorkoutsByUser);

module.exports = router;
