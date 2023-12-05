require("dotenv").config();

const envconfig = require("./src/config/env.config");
const database = require("./src/config/db.config");
const mainRouter = require("./src/routes/main.router");
const { errorHandler } = require("./src/middleware/error.middleware");

const express = require("express");
const debug = require("debug")("app:clinica-api");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const morgan = require("morgan");



//const CLIENT_URL = process.env.CLIENT_URL;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use("/api/v1", mainRouter);
app.use(errorHandler);
app.use(logger("dev"));
app.use(cookieParser());

const port = envconfig.PORT;

app.listen(port, () => {
  debug(`Server is running on port ${port}`);
});

database.connect();