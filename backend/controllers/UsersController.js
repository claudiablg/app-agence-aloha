const mongoose = require('mongoose');
const User = require('../models/UsersModel');


const getUserId = async(req, res) => {
    const foundUser = await User.find().exec();
    if(!foundUser){
        throw new HttpError(400, 'User not found');
    }
    else {
        res.send({ foundUser })
    }
}

module.exports = { 
    getUserId
}