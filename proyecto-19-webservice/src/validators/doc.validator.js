const { body } = require("express-validator");

const validators = {};
const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/;

validators.registerDoctorValidator = [
  body("nombre").not().isEmpty().withMessage("El nombre es obligatorio"),
  body("apellido").not().isEmpty().withMessage("El apellido es obligatorio"),
  body("email")
    .not()
    .isEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("El email debe ser válido"),
  body("password")
    .not()
    .isEmpty()
    .withMessage("El password es obligatorio")
    .isLength({ min: 6 })
    .withMessage("El password debe tener al menos 6 caracteres")
    .matches(passwordRegexp)
    .withMessage("Formato de contraseña incorrecto"),
  body("dui")
    .notEmpty()
    .withMessage("El dui es obligatorio")
    .isLength({ min: 9 })
    .withMessage("EL dui no puede ser menor de 9 dígitos"),
  body("credencial")
    .notEmpty()
    .withMessage("La credencial médica es obligatoria"),
  body("telefono")
    .notEmpty()
    .withMessage("Número de teléfono es obligatorio"),
];

module.exports = validators;
