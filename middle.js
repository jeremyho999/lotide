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
  if (eqArrays(arr1, arr2) === true) {
    console.log("✅✅✅Assertion Passed:", arr1, "===", arr2);
  } else {
    console.log("🛑🛑🛑Assertion Failed:", arr1, "!==", arr2);
  }
};

/*
- Take in an array and return the middle-most element(s) of the given array.
  - Should return an array.
  - Should return an array with 1 single middle element, if the given array has an odd number of elements.
  - Should return an array with 2 middle elments, if the given array has an even number of elements.
  - Should return an empty array, if the given array has at most 2 elements.
*/

const middle = function(arr) {
  let output = [];
  
  if (arr.length < 3) {
    output = [];
  } else if (arr.length % 2 !== 0) {
    output.push(arr[(arr.length - 1) / 2]);
  } else {
    output.push(arr[arr.length / 2 - 1]);
    output.push(arr[arr.length / 2]);
  }
  return output;
};

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);