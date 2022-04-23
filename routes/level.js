const router = require("express").Router();
const update_user = require("../utils/update_user");
const { verifyLevel } = require("../middleware/verify_level");

router.get("/0", verifyLevel, (req, res) => {
    const { email, level } = req.user;
    const { ans } = req.query;
    if (ans == "Level1") update_user(email, level).then(() => res.redirect("/level/" + (level + 1)));
    else res.render("levels/" + level);
});

module.exports = router;
