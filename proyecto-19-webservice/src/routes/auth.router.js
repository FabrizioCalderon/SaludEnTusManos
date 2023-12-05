const express = require('express');
const router = express.Router();


const {
    registerUserValidator,
} = require('../validators/auth.validator');
const authController = require("../controllers/auth.controller");

const { runValidation } = require("../middleware/validator.middleware");

const {
    authentication
} = require("../middleware/auth.middleware");

router.post('/', registerUserValidator, runValidation, authController.register);

router.post("/login", authController.login);

module.exports = router;
