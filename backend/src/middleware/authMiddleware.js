const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(' ')[1]; // Extract token from "Bearer <token>"

        jwt.verify(bearerToken, process.env.SECRET_KEY, (err, authData) => {
            if (err) {
                return res.sendStatus(403); // Forbidden
            }
            req.user = authData;
            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized
    }
};

module.exports = {
    verifyToken
};
