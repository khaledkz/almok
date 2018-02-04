var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add-category', function(req, res, next) {
  res.render('add-category', { title: 'Express' });
});


router.get('/edit-category', function(req, res, next) {
  res.render('edit-category', { title: 'Express' });
});

router.post('/add-category', function(req, res, next) {
  console.log(req.body)
});

module.exports = router;
