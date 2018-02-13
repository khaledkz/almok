require('../connection')
const Article = require('../../models/Article');

const saveArtice = (query, cb) => {
  Article.create(query).then(cb)
}

const findArticle = (query,cb) => {
  Article.find(query).then(cb);
}
module.exports = { saveArtice,findArticle };