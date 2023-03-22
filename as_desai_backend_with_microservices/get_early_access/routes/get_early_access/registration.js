const express  = require("express");
const router = express.Router();
const registration = require("../../controllers/get_early_access/registration.js");


router.route("/").post(registration);

module.exports = router ;