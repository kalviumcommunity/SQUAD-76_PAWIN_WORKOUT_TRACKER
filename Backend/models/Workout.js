const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true, // Index for faster user queries
  },
  date: {
    type: Date,
    default: Date.now,
    index: true, // Index for faster date queries
  },
  exercises: [
    {
      name: { type: String, required: true },
      sets: { type: Number, required: true, min: 1, max: 20 },
      reps: { type: Number, required: true, min: 1, max: 100 },
      weight: { type: Number, min: 0, max: 1000 }, // in kg
      notes: { type: String, maxlength: 500 },
    }
  ],
  duration: {
    type: Number, // in minutes
    required: true,
    min: 1,
    max: 300,
  },
  caloriesBurned: {
    type: Number,
    min: 0,
    max: 5000,
  }
});

// Compound index for user and date
WorkoutSchema.index({ user: 1, date: -1 });

module.exports = mongoose.model('Workout', WorkoutSchema);