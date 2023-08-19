var express = require('express');
var router = express.Router();

const authRouter = require('./auth');
const usersRouter = require('./users');
const articlesRouter = require('./articles');
const questionsRouter = require('./questions');

router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/articles', articlesRouter);
router.use('/questions', questionsRouter);

module.exports = router;
