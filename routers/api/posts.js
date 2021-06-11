const expres = require("express");
const router = expres.Router();

router.get("/", (req, res) => res.send("Posts route"));

module.exports = router;
