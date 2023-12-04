const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },

  dui: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: 9,
    maxlength: 9,
  },
  sexo: {
    type: String,
    enum: ['masculino', 'femenino'],
    required: true,
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  tipoSangre: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/,
  },
  numeroTelefono: {
    type: String,
    required: true,
    match: /^\d{8,15}$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 100,
    select: false, // No enviar la contraseña en las consultas por defecto
  },
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  console.log('Contraseña sin hashear:', user.password);

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  console.log('Contraseña hasheada:', user.password);
  next();
});


module.exports = model('User', userSchema);

