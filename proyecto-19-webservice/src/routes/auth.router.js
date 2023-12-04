const express = require('express');
const router = express.Router();
const {
    registerUser,
} = require('../controllers/auth.controller');

const {
    registerUserValidator,
} = require('../validators/auth.validator');

const { runValidation } = require("../middleware/validator.middleware");

router.post('/', registerUserValidator, runValidation, registerUser);

module.exports = router;