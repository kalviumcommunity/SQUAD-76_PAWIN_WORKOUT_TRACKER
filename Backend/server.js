const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Remove stray .map files if their .js counterparts don't exist
const staticDir = path.join(__dirname, 'public');
if (fs.existsSync(staticDir)) {
  fs.readdirSync(staticDir).forEach(file => {
    if (file.endsWith('.map')) {
      const jsFile = file.replace('.map', '');
      if (!fs.existsSync(path.join(staticDir, jsFile))) {
        fs.unlinkSync(path.join(staticDir, file));
        console.log(`Removed stray source map: ${file}`);
      }
    }
  });
}

// Database connection (updated to remove deprecated options)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', require('./routes/UsersRoutes'));

// Optional: add public folder for static files (e.g., frontend or uploads)
app.use(express.static(path.join(__dirname, 'public')));

// Health check
app.get('/', (req, res) => {
  res.send('workout tracker is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});