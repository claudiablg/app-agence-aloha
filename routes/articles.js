const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/ArticlesController');

router.get('/', articlesController.getArticles);
router.get('/:articleId',  articlesController.getArticleById);
router.post('/add/:userId', articlesController.addArticle);
router.put('/update/:articleId', articlesController.updateArticle);
router.delete('/delete/:articleId', articlesController.deleteArticle);

module.exports = router;