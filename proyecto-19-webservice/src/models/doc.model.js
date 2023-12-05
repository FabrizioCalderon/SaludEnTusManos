const mongoose = require("mongoose");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
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
    credencial: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/,
    },
    telefono: {
        type: String,
        required: true,
        match: /^\d{8,15}$/,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
    },
    tokens: {
        type: [String],
        default: [],
    },
});

doctorSchema.methods = {
    encryptPassword: function (password) {
        if (!password) return "";
        try {
            const hashedPassword = crypto
                .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
                .toString("hex");

            return hashedPassword;
        } catch (error) {
            console.log(error);
            return "";
        }
    },
    makeSalt: function () {
        return crypto.randomBytes(16).toString("hex");
    },
    comparedPassword: function (password) {
        return this.hashedPassword === this.encryptPassword(password);
    },
};

doctorSchema.virtual("password").set(function (password) {
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(password);
});

module.exports = mongoose.model("Doctor", doctorSchema);
