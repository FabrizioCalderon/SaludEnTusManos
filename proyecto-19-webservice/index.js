require('dotenv').config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");


const envconfig = require('./src/config/env.config');
const database = require('./src/config/db.config');
const mainRouter =require('./src/routes/main.router');
const {errorHandler }= require('./src/middleware/error.middleware')

const CLIENT_URL = process.env.CLIENT_URL;
const app = express();

database.connect();\

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: CLIENT_URL, credentials: true }));

//Static routes
app.use(express.static(path.join(__dirname, "public")));


app.use('/api/v1', mainRouter);

app.use(errorHandler);

app.use("/api/v1", apiRouter);
module.exports = app;
