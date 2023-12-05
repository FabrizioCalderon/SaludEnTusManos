const Doctor = require('../models/doctor.model'); // Import your Doctor model
const { createToken, verifyToken } = require('../utils/jwt.tools');

const controller = {};

controller.loginUserDoc = async (req, res, next) => {
  // Logic for doctor login
  // ...

  // Example response
  return res.status(200).json({ message: 'Doctor logged in' });
};

controller.registerUserDoc = async (req, res, next) => {
  // Logic for doctor registration
  // ...

  // Example response
  return res.status(201).json({ message: 'Doctor registered' });
};

module.exports = controller;
