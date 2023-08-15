const express = require('express');
const router = express.Router();
const controller = require('../controllers/UsersController')

router.get('/profile', controller.getUserId)

module.exports = router;