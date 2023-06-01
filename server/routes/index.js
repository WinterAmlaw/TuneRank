// routes/index.js
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// User Login
router.post('/login', userController.login);

// User Signup
router.post('/signup', userController.signup);

//Get all Users
router.get('/users', authMiddleware.authenticateUser, userController.getAllUsers);

// Get individual User
router.get('/users/:id', authMiddleware.authenticateUser, authMiddleware.authorizeUser, userController.getUserById);

module.exports = router;