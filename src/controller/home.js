const { request, response } = require("express");
module.exports = {
  getHome: (req = request, res = response) => {
    res.status(200).send("welcome to my pageApi");
  },
};
