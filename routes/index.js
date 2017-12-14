var express = require('express');
var router = express.Router();
let repo = require('../models/blogRepo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test Blog Site',
  blogPosts: repo.posts()
});
});

module.exports = router;
