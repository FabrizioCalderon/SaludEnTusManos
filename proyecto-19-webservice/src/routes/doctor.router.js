const express = require('express');
const router = express.Router();
const { loginUserDoc, registerUserDoc } = require('../controllers/doctor.controller');

// Define doctor login route
router.post('/login', loginUserDoc);

// Define doctor registration route
router.post('/register', registerUserDoc);

module.exports = router;
