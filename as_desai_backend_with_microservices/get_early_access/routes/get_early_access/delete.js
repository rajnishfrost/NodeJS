const express  = require("express");
const router = express.Router();
const del = require("../../controllers/get_early_access/delete.js");


router.route("/").delete(del);

module.exports = router ;