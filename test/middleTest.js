const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

const assert = require("chai").assert

describe("#middle", () => {

  it("returns empty array for input that is 0, 1, or 2 items long", () => {
    assert.deepEqual(middle([]), []);
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle([1, 2]), []);

  });

  it("returns middle element from inputted array that has odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns middle two elements from inputted array that has even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

});

