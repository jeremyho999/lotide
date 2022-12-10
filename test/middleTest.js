//const assertArraysEqual = require("../assertArraysEqual");
//const middle = require("../middle");

//assertArraysEqual(middle([]), []);
//assertArraysEqual(middle([1]), []);
//assertArraysEqual(middle([1, 2]), []);

//assertArraysEqual(middle([1, 2, 3]), [2]);
//assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
//assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [] for an empty input array", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns [] for a single-element input array", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for a two-element input array", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});