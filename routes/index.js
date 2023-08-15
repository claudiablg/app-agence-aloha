var express = require('express');
var router = express.Router();

const authRouter = require('./auth');
const usersRouter = require('./users');
const postsRouter = require('./posts');
const questionsRouter = require('./questions');

router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/posts', postsRouter);
router.use('/questions', questionsRouter);

module.exports = router;
