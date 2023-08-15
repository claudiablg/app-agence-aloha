const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

router.post('/login', authController.handleLogin);
router.post('/register', authController.handleRegister);
router.get('/logout', authController.handleLogout);
router.get('/refresh', authController.handleRefreshToken);

module.exports = router;