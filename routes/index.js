var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/random', function(req, res, next) {
  let rnd = Math.ceil(Math.random() * 10);  // Random number between 1 and 10
  res.json( { number: rnd} );
});


module.exports = router;
