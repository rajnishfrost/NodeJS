const express = require("express");
const router = express.Router();
const {comment_delete , comment_update} = require("../controllers/comment.js");


router.route("/delete").delete(comment_delete);
router.route("/update").put(comment_update);

module.exports = router