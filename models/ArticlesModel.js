const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./UsersModel');

const ArticlesSchema = new Schema({
    img: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId, 
        ref: User,
    },
    title: {
        type: String,
        // required: true,
    },
    subtitle: {
        type: String,
    },
    description: {
        type: String,
        // required: true,
    },
    category: {
        type: Array,
        // required: true,
    },
    date: {
        type: Date,
    },
    html: {
        type: String,
    },
    json: {
        type: JSON,
    },
    plainText: {
        type: String,
    },

});

module.exports = mongoose.model('Articles', ArticlesSchema);