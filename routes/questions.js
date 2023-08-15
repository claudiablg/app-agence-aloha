const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/QuestionsController');

router.get('/:userId',  questionsController.getQuestions);
router.post('/:userId/add', questionsController.addQuestion);
router.put('/:questiontId/update', questionsController.updateQuestion);
router.delete('/:questionId/delete', questionsController.deleteQuestion);

module.exports = router;