const eqArrays = require("./eqArrays");

/*
- Take in 2 arrays and log an appropriate message to the console.
*/

const assertArraysEqual = function(arr1, arr2) {
  //if (eqArrays(arr1, arr2) === true) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅Assertion Passed:", arr1, "===", arr2);
  } else {
    console.log("🛑🛑🛑Assertion Failed:", arr1, "!==", arr2);
  }
};


module.exports = assertArraysEqual;