const mongoose = require('mongoose');
const User = require('../models/UsersModel');
const Questions = require('../models/QuestionsModel');

//get posts by userid
const getQuestions = async(req, res) => {
    const userId = req.params.userId;

    const foundQuestions = await Questions.find({userId: userId}).exec();

    if(!foundQuestions) return res.json({'message': 'Aucunes questions'})
    res.send(foundQuestions)
}

//add faq by userid
const addQuestion = (req, res) => {
    const userId = req.params.userId;

    const { question, answer } = req.body;
    const newQuestion = new Questions({
        userId: userId,
        question: question,
        answer: answer,
    })

    newQuestion.save((err, question) => {
        if(err) res.send(err);
        else res.status(200).send({"Success": true})
    })
}

//update post by projectid
const updateQuestion = (req, res) => {
    const questionId = req.params.questionId;

    const { title, description, category } = req.body;

    Questions.findByIdAndUpdate({_id: questionId}, { title: title, description: description, category: category}, (err, questions) => {
        if(err) res.send(err)
        else res.status(200).send({"Success": true})
    })
}

//delete post by projectid
const deleteQuestion = (req, res) => {
    const questionId = req.params.questionId;

    Questions.findByIdAndRemove({_id: questionId}, (err, question) => {
        if(err) res.send(err);
        else res.status(200).send({"Success": true});
    })
}

module.exports = {
    getQuestions,
    addQuestion,
    updateQuestion,
    deleteQuestion,
}