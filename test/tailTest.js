//const assertEqual = require("../assertEqual");
//const tail = require("../tail");


const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(['Hello', 'Lighthouse', 'Labs']);
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  });

  it("does not modify the input array", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Hello", "Lighthouse", "Labs"]);
  });

  it("returns [] for an empty input array", () => {
    const tailedArr = tail([]);
    assert.deepEqual(tailedArr, []);
  });

  it("returns [] for a single-element input array", () => {
    const tailedResult = tail([1]);
    assert.deepEqual(tailedResult, []);
  });
});