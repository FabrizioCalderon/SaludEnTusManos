const {body} = require('express-validator');

const validators = {};
const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/;

validators.registerUserValidator = [
        body('nombre')
            .not()
            .isEmpty()
            .withMessage('El nombre es obligatorio'),
        body('apellido')
            .not()
            .isEmpty()
            .withMessage('El apellido es obligatorio'),
        body('email')
            .not()
            .isEmpty()
            .withMessage('El email es obligatorio')
            .isEmail()
            .withMessage('El email debe ser válido'),
        body('password')
            .not()
            .isEmpty()
            .withMessage('El password es obligatorio')
            .isLength({min: 6})
            .withMessage('El password debe tener al menos 6 caracteres').matches(passwordRegexp)
    .withMessage("Password format incorret")   
        ,
        body('dui')
            .not()
            .isEmpty()
            .withMessage('El dui es obligatorio')
    ];

module.exports = validators;
