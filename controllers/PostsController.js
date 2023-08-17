const mongoose = require('mongoose');
const User = require('../models/UsersModel');
const Posts = require('../models/PostsModel');

//get posts
const getPosts = async(req, res) => {
    const foundPosts = await Posts.find().exec();
    console.log(foundPosts)
    if(!foundPosts) return res.json({'message': 'Aucun projet'})
    res.send(foundPosts)
}

//get posts by userid
const getPostsByUser = async(req, res) => {
    const userId = req.params.userId;

    const foundPosts = await Posts.find({userId: userId}).exec();
    console.log(foundPosts)
    if(!foundPosts) return res.json({'message': 'Aucun projet'})
    res.send(foundPosts)
}

//add posts by userid
const addPost = (req, res) => {
    const userId = req.params.userId;
    console.log(req.body);
    const { title, description, category } = req.body;
    console.log(req.body);
    const newPost = new Posts({
        userId: userId,
        title: title,
        description: description,
        category: category,
        date: new Date(),
    })

    newPost.save((err, posts) => {
        if(err) res.send('cest un erreur' + err);
        else res.status(200).send({"Success": true})
    })
}

//update post by projectid
const updatePost = (req, res) => {
    const postId = req.params.postId;

    const { title, description, category } = req.body;

    Posts.findByIdAndUpdate({_id: postId}, { title: title, description: description, category: category}, (err, posts) => {
        if(err) res.send(err)
        else res.status(200).send({"Success": true})
    })
}

//delete post by projectid
const deletePost = (req, res) => {
    const postId = req.params.postId;

    Posts.findByIdAndRemove({_id: postId}, (err, post) => {
        if(err) res.send(err);
        else res.status(200).send({"Success": true});
    })
}

module.exports = {
    getPosts,
    getPostsByUser,
    addPost,
    updatePost,
    deletePost,
}