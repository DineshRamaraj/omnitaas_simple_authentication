const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/welcome', verifyToken, (req, res) => {
    res.json({
        message: 'You have successfully authenticated against the protected API.',
        user: req.user
    });
});

module.exports = router;
