var express = require('express');
var router = express.Router();
const dbClinetCate = require('../db-client/categories/category')
/* GET home page. */
router.get('/add-category', function (req, res, next) {
  res.render('add-category', { title: 'Express' });
});


router.get('/edit-category', function (req, res, next) {
  const cb = (categories) => {
    console.log(categories);
    res.render('edit-category', { categories });
  }
  dbClinetCate.findCategory({}, cb);
});

router.post('/add-category', function (req, res, next) {
  let cb = () => {
    res.redirect('/')
  }
  dbClinetCate.saveCategory(req.body, cb);
});

router.get('/edit-category/:singleCat',(req, res, next)=>{

  const {singleCat} = req.params;

  const cb=(category)=>{
      res.render('single-category',{
        category
      })
  }

  dbClinetCate.findSingleCategory(singleCat,cb)
})

router.get('/edit-category/:singleCat/delete',(req, res, next)=>{

  const {singleCat} = req.params;
  res.redirect('/');
  
})

router.get('/edit-category/:singleCat/update',(req, res, next)=>{

  const {singleCat} = req.params;
  res.redirect('/');
  
})

module.exports = router;
