const router = require("express").Router();
const User = require("../models/User");

router.get("/", (req, res) => {
    User.find({}, { _id: 0, __v: 0 }, (err, users) => {
        if (err) return res.status(500).send(err);
        users.sort((a, b) => b.score - a.score);
        res.render("leaderboard", { users });
    });
});

module.exports = router;
