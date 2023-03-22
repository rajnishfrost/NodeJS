const express = require("express");
const router = express.Router();
const comment = require("../controllers/comment.js")

router.route("/").post(comment)

module.exports = router;