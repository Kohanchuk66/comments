const {Schema, model} = require('mongoose');
const validator = require('validator');

commentSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: false,
        lowercase: true,
        validate: [validator.isEmail, `Provide a valid e-mail`]
    },
    homePage: {
        type: String
    },
    text: {
        type: String,
        required: true
    },
});

module.exports = model('Comment', commentSchema)