const express = require('express');

const router = express.Router();

router.route('/')
    .get(commentController.getComments)
    .post(commentController.updateUser)
