const express = require("express");
const router = express.Router();

const citasRouter = require("./cita.router");
const authRouter = require("./auth.router");

router.use("/citas", citasRouter);
router.use("/auth", authRouter);

module.exports = router;
