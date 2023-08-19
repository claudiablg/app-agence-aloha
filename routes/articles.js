const express = require('express');
const router = express.Router();
const postsController = require('../controllers/ArticlesController');

router.get('/d',  postsController.getArticles);
router.get('/:articleId',  postsController.getArticleById);
router.get('/:userId',  postsController.getArticlesByUser);
router.post('/add/:userId', postsController.addArticle);
router.put('/update/:articleId', postsController.updateArticle);
router.delete('/delete/:articleId', postsController.deleteArticle);

module.exports = router;