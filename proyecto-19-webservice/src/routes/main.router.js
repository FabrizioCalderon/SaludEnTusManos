const express = require("express");
const router = express.Router();

const citasRouter = require("./cita.router");
const authRouter = require("./auth.router");
const docRouter = require("./doc.router");

router.use("/citas", citasRouter);
router.use("/auth", authRouter);
router.use("/doctores", docRouter);

module.exports = router;
