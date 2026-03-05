const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/welcome', verifyToken, (req, res) => {
    res.json({
        message: 'Welcome to the protected route!',
        user: req.user
    });
});

module.exports = router;
