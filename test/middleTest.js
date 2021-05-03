const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns true for [] === []", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns true for [3, 4] === [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns false for [2, 3] !== [1, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});