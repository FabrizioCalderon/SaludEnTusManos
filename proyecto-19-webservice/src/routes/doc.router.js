const express = require("express");
const router = express.Router();

const {
  registerDoctorValidator,
} = require("../validators/doc.validator");
const docController = require("../controllers/doc.controller");

const runValidation = require("../validators/index.middleware");

router.post(
  "/register",
  registerDoctorValidator,
  runValidation,
  docController.register
);

router.post("/login", docController.login);

module.exports = router;
