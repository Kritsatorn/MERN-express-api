"use strict";

var expres = require("express");

var router = expres.Router();

var auth = require("../../middleware/auth");

var _require = require("express-validator"),
    check = _require.check,
    validationResult = _require.validationResult;

var config = require("config"); // @route   POST api/post
// @desc    create Post
// @access  Private


router.get("/", [auth, [check("text", "Text is require").not().isEmpty()]], function (req, res) {});
module.exports = router;