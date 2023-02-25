const jwt = require("jsonwebtoken");
const prisma = require("../utils/prisma");
const {secret} = require("../utils/config");

// handle logins

function login(req, res) {
   const {email, password}  =req.body;

    // check if user exists
    prisma.user.findUnique({
        where: {
           email: email,
        }
    }).then((user) => {
        if (user) {
            // check if password matches
            if (user.password === password) {
                // create token
                const token = jwt.sign({
                        id: user.id,
                        role:user.role
                    },
                    secret,
                    {expiresIn: "10m"}
                );
                const refreshToken = jwt.sign({
                        id: user.id,
                    },
                    secret,
                    {expiresIn: "1d"}
                );
                // filter out password and id
                const userData = {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    name: user.name,
                }
                res.status(200).send({auth: true, token: token, refreshToken: refreshToken, user: userData});
            } else {
                res.status(401).send({auth: false, message: "Invalid password"});
            }
        } else {
            res.status(404).send({auth: false, message: "User not found"});
        }
    })
}

function refreshToken(req, res) {
    const {refreshToken} = req.body;
    if (refreshToken == null) return res.sendStatus(401);
    jwt.verify(refreshToken, secret, (err, user) => {
        if (err) return res.sendStatus(403);
        const token = jwt.sign({
                id: user.id,
                role: user.role
            },
            secret,
            {expiresIn: "10m"}
        );
        res.json({token: token});
    });
}

module.exports = {
    login,
    refreshToken
};
