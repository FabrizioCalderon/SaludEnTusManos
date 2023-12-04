// controllers/user.controller.js
const RegisterUser = require('../models/user.model');

const registerUser = async (req, res) => {
  try {
    const newRegisterUser = new RegisterUser(req.body);
    const savedUser = await newRegisterUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

module.exports = {
  registerUser,
};