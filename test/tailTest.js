const assert = require('chai').assert;
const tail = require('../tail')

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [2, 3, 4, 5, 6] for [2, 3, 4, 5, 6]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]);
  });
});