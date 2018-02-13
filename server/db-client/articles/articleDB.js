require('../connection')
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

module.exports = { saveArtice,findArticle,findSingleArticle };