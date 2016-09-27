'use strict';

var APIError = require('../APIError');

exports.listAll = function() {
  var posts = {
    posts: [
      { id: 1, title: "Post 1", content: "This is a good example" },
      { id: 2, title: "Post 2", content: "This is a poor example" }
    ],
    paging: {
      size: 5,
      limit: 2,
      start: 1
    }
  };
  return posts;
};

exports.listAllSortByNewest = function() {
  var posts = {
    posts: [
      { id: 2, title: "Post 2", content: "This is a poor example" },
      { id: 1, title: "Post 1", content: "This is a good example" }
    ],
    paging: {
      size: 5,
      limit: 2,
      start: 1
    }
  };
  return posts;
};

exports.getById = function(id) {
  var posts = [
    { id: 1, title: "Post 1", content: "This is a good example" },
    { id: 2, title: "Post 2", content: "This is a poor example" }
  ];
  var index = parseInt(id) - 1;
  if (index >= 0 && index < posts.length) {
    var post = posts[index];
    return post;
  } else {
    return new APIError(404, 'Post not found');
  }
};