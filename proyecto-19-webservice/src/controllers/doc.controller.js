// controllers/signupdoc.controller.js
const Doctor = require("../models/doctor.model");
const { createToken } = require("../utils/jwt.tools");
const controller = {};

controller.registerDoc = async (req, res, next) => {
  try {
    const {
      nombre,
      apellido,
      password,
      dui,
      credencial,
      email,
      telefono,
      // Otros campos específicos para los doctores
    } = req.body;

    // Verificar si el doctor ya existe
    const doctor = await Doctor.findOne({ $or: [{ credencial: credencial }] });

    if (doctor) {
      return res.status(409).json({ error: "El doctor ya está registrado" });
    }

    // Crear un nuevo doctor
    const newDoctor = new Doctor({
      nombre: nombre,
      apellido: apellido,
      dui: dui,
      credencial: credencial,
      email: email,
      telefono: telefono,
      // Otros campos específicos para los doctores
      password: password,
    });

    // Guardar el nuevo doctor en la base de datos
    await newDoctor.save();

    // Crear un token para el nuevo doctor
    const token = await createToken(newDoctor._id);

    // Responder con éxito y el token generado
    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = controller;
