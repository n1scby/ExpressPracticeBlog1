var express = require('express');
var router = express.Router();
let repo = require('../models/blogRepo');

/* GET Post page. */
router.get('/:linkName', function(req, res, next) {
  var post = req.params.linkName;
  var blog = repo.getPostByLink(post);
  res.render('post', { title: 'Test Blog Site',
  blogTitle: blog.title, blogContent: blog.postContent
});
});

module.exports = router;