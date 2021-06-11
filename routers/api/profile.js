const expres = require("express");
const router = expres.Router();

router.get("/", (req, res) => res.send("Profile route"));

module.exports = router;
