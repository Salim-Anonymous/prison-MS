const prisma = require("../utils/prisma");
const jwt = require("jsonwebtoken");
const secret = require("../utils/config").secret;
//handle user creation
function createUser(req, res) {

    const {email, password, token} = req.body;

    //check if user is admin
    if (token) {
        const decoded = jwt.verify(token, secret);
        prisma.user.findUnique({
            where: {
                id: decoded.id,
            }
        }).then((user) => {
            if (user.role !== "ADMIN") {
                res.status(403).send({message: "You are not authorized to create users"});
            }
        })
    }

    prisma.user.create({
        data: {
            email: email,
            password: password,
        }
    }).then((user) => {
        res.status(201).json(user);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

module.exports = {
    createUser,
}