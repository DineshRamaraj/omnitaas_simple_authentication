const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const user = await userModel.getUserFromDatabase(username);

        if (user && await bcrypt.compare(password, user.passwordHash)) {
            // Generate JWT
            const token = jwt.sign(
                { username: user.username },
                process.env.SECRET_KEY,
                { expiresIn: '1h' }
            );

            res.status(200).json({
                message: 'Login successful',
                token: token,
                username: user.username
            });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    loginUser
};
