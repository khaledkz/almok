var express = require('express');
var router = express.Router();

const dbClinetArt = require("../db-client/articles/articleDB")
/* GET home page. */
router.get('/add-article', function(req, res, next) {
  res.render('add-article'); 
});

router.get('/edit-article', function(req, res, next) {
  const cb=(articles)=>{
    console.log(articles);
    res.render('edit-article',{articles}); 
  }
  dbClinetArt.findArticle({},cb)
});

router.post('/add-article', function(req, res, next) {

  let cb=()=>{
    res.redirect('/')
  }
  dbClinetArt.saveArtice(req.body,cb);
});

module.exports = router;
