const express = require('express');

const commentController = require('../controllers/comment.controller')

const router = express.Router();

router.route('/')
    .get(commentController.getComments)
    .post(commentController.createComment)

module.exports = router;