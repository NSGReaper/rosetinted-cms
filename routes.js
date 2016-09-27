'use strict';

var APIError = require('./APIError');

module.exports = function(app) {
	var posts = require('./controllers/posts');

	app.get('/posts', function(req, res) { 
    if (req.query.sortBy === 'newest') {
      res.send(posts.listAllSortByNewest());
    } else {
      res.send(posts.listAll());
    }
  });

	app.get('/posts/:id', function(req, res) {
    var post = posts.getById(req.params.id);
    if (post instanceof APIError) {
      res.send(post.getCode(), { error: post.getMessage()});
    }
    res.send(post);
  });
};