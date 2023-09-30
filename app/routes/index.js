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

router.get('/homepage', function(req, res, next) {
  res.render('homepage', { title: 'H O M E P A G E ' });
});
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'A B O U T - M E ' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', 
  { 
    product: 'Products',
    title: 'Phone'
  });
});
//
module.exports = router;
