const mongoose = require('mongoose');
const User = require('../models/UsersModel');
const Articles = require('../models/ArticlesModel');

//get articles
const getArticles = async (req, res) => {
  const foundArticles = await Articles.find().exec();
  console.log(foundArticles);
  if (!foundArticles) return res.json({ message: 'Aucun projet' });
  res.send(foundArticles);
};

// get articles by articleId
const getArticleById = async (req, res) => {
  const articleId = req.params.articleId;

  const foundArticles = await Articles.findById({ _id: articleId }).exec();
  console.log(foundArticles);
  if (!foundArticles) return res.json({ message: 'Aucun projet' });
  res.send(foundArticles);
};

//add articles by userid
const addArticle = (req, res) => {
  const userId = req.params.userId;
  // console.log(req.body);
  const { img, title, subtitle, description, category, html, json, plainText } =
    req.body;
  // console.log(req.body);
  const newArticle = new Articles({
    img: img,
    userId: userId,
    title: title,
    subtitle: subtitle,
    description: description,
    category: category,
    date: new Date(),
    html: html,
    json: json,
    plainText: plainText,
  });

  newArticle.save((err, articles) => {
    if (err) res.send('cest un erreur' + err);
    else res.status(200).send({ Success: true });
  });
};

//update post by article id
const updateArticle = (req, res) => {
  const articleId = req.params.articleId;

  const { title, description, category } = req.body;

  Articles.findByIdAndUpdate(
    { _id: articleId },
    { title: title, description: description, category: category },
    (err, articles) => {
      if (err) res.send(err);
      else res.status(200).send({ Success: true });
    }
  );
};

//delete post by article id
const deleteArticle = (req, res) => {
  const articleId = req.params.articleId;

  Articles.findByIdAndRemove({ _id: articleId }, (err, article) => {
    if (err) res.send(err);
    else res.status(200).send({ Success: true });
  });
};

module.exports = {
  getArticles,
  getArticleById,
  addArticle,
  updateArticle,
  deleteArticle,
};
