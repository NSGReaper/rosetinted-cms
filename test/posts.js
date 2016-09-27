'use strict';

var expect = require('chai').expect;
var posts = require('../controllers/posts');

describe('Posts Controller', function() {
  describe('listAll', function() {
    it('Returns a list of posts', function() {
      var postList = posts.listAll();

      expect(postList.posts).to.be.a('array');
      expect(postList.posts[0].id).to.equal(1);
    });
    it('Returns paging information', function() {
      var postList = posts.listAll();

      expect(postList.paging.size).to.be.a('number');
      expect(postList.paging.limit).to.be.a('number');
      expect(postList.paging.start).to.be.a('number');
    });
  });
  describe(('getById'), function() {
    it('Returns a specific post', function () {
      var expectedId = 1;
      var post = posts.getById(expectedId);

      expect(post.id).to.be.a('number');
      expect(post.id).to.equal(expectedId);
    });
    it('Returns a 404 error when asked for a non-existant post', function () {
      var post = posts.getById(0);

      expect(post.getCode()).to.equal(404);
    });
  });
});