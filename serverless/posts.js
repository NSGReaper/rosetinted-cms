'use strict';

var posts = require('./controllers/posts');
var APIError = require('./APIError');

module.exports.list = (event, context, cb) => {
  cb(null, posts.listAll());
};

module.exports.get = (event, context, cb) => { 
  var post = posts.getById(event.path.id);
  if (post instanceof APIError) {
    cb(posts.getObject());
  } else {
    cb(null, post);
  }
};

module.exports.hello = (event, context, cb) => {
  cb(null, {event, context});
};
