require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Setup a mock database user for testing
// The password should be 'admin'
const usersDB = [
    {
        username: 'admin',
        // Hash for 'admin' password
        passwordHash: '$2b$10$B11yO0gMjB/pwvVld01xdu7svNrNIS5adz2ywajd7jjP2g4hTAMSS'
    }
];

const getUserFromDatabase = async (username) => {
    return usersDB.find(user => user.username === username);
};

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per windowMs
});

app.post('/login', loginLimiter, async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = await getUserFromDatabase(username);

    if (user && await bcrypt.compare(password, user.passwordHash)) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
