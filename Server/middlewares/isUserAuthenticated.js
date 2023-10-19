const jwt = require("jsonwebtoken");
require('dotenv').config();

module.exports = isAuthenticated = (req, res, next) => {
    console.log(req.headers)
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1]
    if (token === null) {
        res.status(401).send('No access token')
    }

    else {
        jwt.verify(token, process.env.jwt_Secret, (err, user) => {
            if (!err) {
                console.log(user)
                req.user=user
                next()
            }
            if (err) {
                console.log(err)
                res.status(401).send(err)
            }
        })
    }
}
