const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, getAllUsers,updateUserProfile } = require('../controllers/usersController');
const { protect } = require('../middleware/auth.middleware');
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile/:id', getUserProfile);
router.get('/', getAllUsers);
router.put('/:id',protect, updateUserProfile); 

module.exports = router;