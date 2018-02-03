var express = require('express');
var router = express.Router();

/* GET home page. */
 
router.get('/add-article', function(req, res, next) {
  res.render('add-article'); 
});
router.get('/edit-article', function(req, res, next) {
  res.render('edit-article'); 
});

module.exports = router;
