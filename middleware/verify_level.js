const User = require("../models/User");

module.exports = {
    verifyLevel: (req, res, next) =>
        User.findOne({ email: req.user.email }, { _id: 0, level: 1 }, (err, user) => {
            if (err) return res.status(500).end();
            if (user.level != req.params.id) return res.redirect("/level/" + user.level);
            next();
        })
};
