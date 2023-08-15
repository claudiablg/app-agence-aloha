const express = require('express');
const router = express.Router();
const postsController = require('../controllers/PostsController');

router.get('/:userId',  postsController.getPosts);
router.post('/:userId/add', postsController.addPost);
router.put('/:postId/update', postsController.updatePost);
router.delete('/:postId/delete', postsController.deletePost);

module.exports = router;