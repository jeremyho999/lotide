const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅Assertion Passed:", arr1, "===", arr2);
  } else {
    console.log("🛑🛑🛑Assertion Failed:", arr1, "!==", arr2);
  }
};

/*
- Take in a string and return all the indices (zero-based positions) in the string where each "letter" is found.
  - 🔺🔺🔺Define the returned object structure.
  - Write a test.
  - Loop over all the characters in the input.
  - Simply record all the indices in the input where each unique "characters" is found.
  - Add an "if" condition to skip spaces.
*/

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};

const output = letterPositions("hello");
assertArraysEqual(output["h"], [0]);
assertArraysEqual(output["e"], [1]);
assertArraysEqual(output["l"], [2, 3]);
assertArraysEqual(output["o"], [4]);

const result1 = letterPositions("lighthouse in the house");
assertArraysEqual(result1.l, [0]);
assertArraysEqual(result1.i, [1, 11]);
assertArraysEqual(result1.g, [2]);
assertArraysEqual(result1.h, [3, 5, 15, 18]);
assertArraysEqual(result1.t, [4, 14]);
assertArraysEqual(result1.o, [6, 19]);
assertArraysEqual(result1.u, [7, 20]);
assertArraysEqual(result1.s, [8, 21]);
assertArraysEqual(result1.e, [9, 16, 22]);
assertArraysEqual(result1.n, [12]);