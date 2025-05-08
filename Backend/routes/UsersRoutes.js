const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, getAllUsers } = require('../controllers/usersController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile/:id', getUserProfile);
router.get('/', getAllUsers); 
router.put('/:id',protect, updateUserProfile); 

module.exports = router;