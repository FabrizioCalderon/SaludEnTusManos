const Doctor = require("../models/doc.model");
const { createToken, verifyToken } = require("../utils/jwt.tools");

const controller = {};

controller.register = async (req, res, next) => {
  try {
    const {
      nombre,
      apellido,
      password,
      dui,
      credencial,
      email,
      telefono,
    } = req.body;

    const doctor = await Doctor.findOne({
      $or: [{ dui: dui }],
    });

    if (doctor) {
      return res.status(409).json({ error: "El doctor ya existe" });
    }

    const newDoctor = new Doctor({
      nombre: nombre,
      apellido: apellido,
      dui: dui,
      credencial: credencial,
      email: email,
      telefono: telefono,
      password: password,
    });

    await newDoctor.save();

    return res.status(201).json({ message: "Doctor registered" });
  } catch (error) {
    next(error);
  }
};

controller.login = async (req, res, next) => {
  try {
    const { dui, password } = req.body;

    const doctor = await Doctor.findOne({
      $or: [{ dui: dui }],
    });

    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    if (!doctor.comparedPassword(password)) {
      return res.status(401).json({ error: "Incorrect Password" });
    }

    const token = await createToken(doctor._id);

    let _tokens = [...doctor.tokens];

    const _verifyPromises = _tokens.map(async (_t) => {
      const status = await verifyToken(_t);
      return status ? _t : null;
    });

    _tokens = (await Promise.all(_verifyPromises))
      .filter((_t) => _t)
      .slice(0, 4);

    _tokens = [token, ..._tokens];
    doctor.tokens = _tokens;

    await doctor.save();

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = controller;
