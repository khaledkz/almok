var express = require('express');
var router = express.Router();
 const dbClinetCate = require('../db-client/categories/category')
/* GET home page. */
router.get('/add-category', function(req, res, next) {
  res.render('add-category', { title: 'Express' });
});


router.get('/edit-category', function(req, res, next) {
  res.render('edit-category', { title: 'Express' });
});

router.post('/add-category', function(req, res, next) {
  let cb=()=>{
      res.redirect('/')
  }
  dbClinetCate.saveCategory(req.body,cb);
  // dbClinetCate.saveCategory
});

module.exports = router;
