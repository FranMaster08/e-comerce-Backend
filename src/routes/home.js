const { Router } = require("express");
const { home } = require("../controller");
const router = Router();
router.get("/", home.getHome);
module.exports = router;
