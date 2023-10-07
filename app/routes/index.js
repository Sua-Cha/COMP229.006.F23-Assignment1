var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Express' 
  }
  );
});

// router.get('/about', function(req, res, next) {
//   res.render('index', { title: 'About' });
// });

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});


router.get('/products', function(req, res, next) {
  res.render('products', 
  { 
    product: 'Products',
    title: 'Phone'
  });
});
//
module.exports = router;