const Workout = require('../models/Workout');

// Create a new workout entry for a user
const createWorkout = async (req, res) => {
  try {
    const { user, date, exercises, duration, caloriesBurned } = req.body;

    if (!user || !exercises || !duration) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const workout = new Workout({
      user,
      date,
      exercises,
      duration,
      caloriesBurned,
    });

    await workout.save();
    res.status(201).json(workout);
  } catch (err) {
    console.error('Error creating workout:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all workouts for a specific user (optionally paginated)
const getWorkoutsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { limit = 20, skip = 0 } = req.query;

    const workouts = await Workout.find({ user: userId })
      .sort({ date: -1 })
      .limit(Number(limit))
      .skip(Number(skip));

    res.json(workouts);
  } catch (err) {
    console.error('Error fetching workouts:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createWorkout,
  getWorkoutsByUser,
};
