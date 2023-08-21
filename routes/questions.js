const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/QuestionsController');

router.get('/',  questionsController.getQuestions);
router.post('/add/:userId', questionsController.addQuestion);
router.put('/update/:questionId', questionsController.updateQuestion);
router.delete('/delete/:questionId', questionsController.deleteQuestion);

module.exports = router;