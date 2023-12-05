const express = require("express");
const router = express.Router();

const citasRouter = require("./cita.router");
const authRouter = require("./auth.router");
const doctorRouter = require("./doctor.router");
const antecedentesRouter = require("./antecedentes.router");

router.use("/citas", citasRouter);
router.use("/auth", authRouter);
router.use("/doctor", doctorRouter);
router.use("/antecedentes", antecedentesRouter);

module.exports = router;
