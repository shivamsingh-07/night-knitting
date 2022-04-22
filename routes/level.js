const router = require("express").Router();
const { verifyLevel } = require("../middleware/verify_level");

router.get("/:id", verifyLevel, (req, res) => res.render("levels/" + id));

module.exports = router;
