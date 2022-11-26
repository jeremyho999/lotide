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
- Take in an array containing nested arrays and return a "flattened" array.
  - If an item is also an array, (XXremove itXX) assign it to a temporary arr, and push all arr's elements back 
  to the new flattened output array.
*/

const flatten = function(arrsInArr) {
  let output = [];

  for (let i = 0; i < arrsInArr.length; i++) {
    if (Array.isArray(arrsInArr[i])) {
      //let arr = arrsInArr.splice(i, 1);
      let arr = arrsInArr[i];
      for (let elm of arr) {
        output.push(elm);
      }
    } else {
      output.push(arrsInArr[i]);
    }
  }
  return output;
};

const nums = [1, 2, [3, 4], 5, [6]];
//console.log(nums);
//console.log(flatten(nums));
assertArraysEqual(flatten(nums), [1, 2, 3, 4, 5, 6]);