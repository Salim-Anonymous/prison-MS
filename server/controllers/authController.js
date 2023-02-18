const passport = require("passport");
const jwt = require("jsonwebtoken");

const {secret} = require("../utils/config");

// handle logins

function login(req, res, next) {
    passport.authenticate("local", {session: false}, (err, user) => {
        if (err || !user) {
            return res.status(401).json({
                success: false,
                message: "invalid username or password",
            });
        }
        req.login(user, {session: false}, (err) => {
            if (err) {
                return next(err);
            }

            const token = jwt.sign({id: user.id}, secret);

            res.status(200).json({
                success: true,
                message: "Login successful",
                token,
            });
        });
    })(req, res, next);
}

module.exports = {
    login,
};
