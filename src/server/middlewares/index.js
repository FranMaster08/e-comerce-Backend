const express = require("express");
const morgan = require("morgan");
const applyMiddleWare = (app = express()) => {
  app.use(morgan("dev"));
  app.use("/", require("../../routes"));
};
module.exports = { applyMiddleWare };
