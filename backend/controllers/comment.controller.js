const Comment = require('../models/Comment');

exports.getComments = async (req, res) =>{
    try {
        let comments = await Comment.find().lean();

        if (comments.length === 0)
            return res.status(204).json({
                message: 'No content'
            });

        return res.status(200).json({
            count,
            comments
        });
    } catch (e) {
        return res.status(500).json({
            message: 'Something went wrong. Please,try again.'
        });
    }
}

exports.createComment = async (req, res) =>{
    try {
        const {username, email, homePage, text} = req.body;

        const newComment = new Comment({username, email, homePage, text});
        let comments = await Comment.find().lean();
        
        return res.status(201).json( {
            count,
            comments
        });
    } catch (e) {
        return res.status(500).json({
            message: 'Something went wrong. Please,try again.'
        });
    }
}