require('../connection');

const ObjectId = require('mongodb').ObjectID;
const Article = require('../../models/Article');

const saveArtice = (query, cb) => {
  Article.create(query).then(cb)
}

const findArticle = (query,cb) => {
  Article.find(query).then(cb);
}

const findSingleArticle=(singleArticle,cb)=>{
  Article.findById(singleArticle).then(cb);
}

const removeArticle=(singleArticle,cb)=>{
  Article.remove({"_id":ObjectId(singleArticle)}).then(cb);
}

module.exports = { saveArtice,findArticle,findSingleArticle,removeArticle };