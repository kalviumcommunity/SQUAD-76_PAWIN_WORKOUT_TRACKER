const Workout = require('../models/Workout');

// Create a new workout entry for the authenticated user
const createWorkout = async (req, res) => {
  try {
    const { date, exercises, duration, caloriesBurned } = req.body;

    // use the user id from the JWT rather than trusting the client
    const userId = req.user && req.user._id;

    if (!userId || !exercises || !duration) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const workout = new Workout({
      user: userId,
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
// Note: only the owner may fetch their workouts
const getWorkoutsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { limit = 20, skip = 0 } = req.query;

    // enforce that the authenticated user matches requested userId
    if (!req.user || req.user._id.toString() !== userId) {
      return res.status(403).json({ message: 'Not authorized to view these workouts' });
    }

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
