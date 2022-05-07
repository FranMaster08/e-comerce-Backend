const { applyMiddleWare } = require("./middlewares");
const express = require("express");
const app = express();
applyMiddleWare(app);
module.exports = app;
