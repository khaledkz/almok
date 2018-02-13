var express = require('express');
var router = express.Router();

const dbClinetArt = require("../db-client/articles/articleDB")
/* GET home page. */
router.get('/add-article', function (req, res, next) {
  res.render('add-article');
});

router.get('/edit-article', function (req, res, next) {
  const cb = (articles) => {
    res.render('edit-article', { articles });
  }
  dbClinetArt.findArticle({}, cb)
});

router.post('/add-article', function (req, res, next) {

  let cb = () => {
    res.redirect('/')
  }
  dbClinetArt.saveArtice(req.body, cb);
});

router.get('/edit-article/:articleId', function (req, res, next) {

  const { articleId } = req.params;

  const cb = (singleArticle) => {

    res.render('single-article', {
      singleArticle
    });
  }

  dbClinetArt.findSingleArticle(articleId, cb)
})

router.get('/edit-article/:articleId/delete', function (req, res, next) {
  const { articleId } = req.params;

  const cb = () => {
    res.redirect('/article/edit-article')
  }
  dbClinetArt.removeArticle(articleId, cb)
})

router.get('/edit-article/:articleId/update', function (req, res, next) {

  const { articleId } = req.params;
 
  const cb = (singleArticle) => {

    res.render('edit-single-article', {
      singleArticle
    });
  }

  dbClinetArt.findSingleArticle(articleId, cb)
})

router.post('/edit-article/:articleId/update', function (req, res, next) {
  const { articleId } = req.params;
  const cb=()=>{
    res.redirect(`/article/edit-article/${articleId}`)
  }
  dbClinetArt.updateArticle(articleId,req.body,cb);
})

module.exports = router;
