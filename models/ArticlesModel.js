const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./UsersModel');

const ArticlesSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId, 
        ref: User,
    },
    title: {
        type: String,
        // required: true,
    },
    description: {
        type: String,
        // required: true,
    },
    category: {
        type: Array,
        // required: true,
    },
    date: Date,
});

module.exports = mongoose.model('Articles', ArticlesSchema);