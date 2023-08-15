const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./UsersModel');

const QuestionsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId, 
        ref: User,
    },
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Questions', QuestionsSchema);