var assert = require('assert');

describe('Caught em all!', function() {
  describe('150 Pokemon', function() {
    it('should return how many Pokemon are left in Kanto', function() {
      assert.equal(150 - 20, 130);
    });
  });
});