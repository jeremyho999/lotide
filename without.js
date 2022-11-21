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
- Take in a source array and a "itemsToRemove" array and return a new array with only those items from the source array
  that are not present in the other array.
  - (how to) Remove an unwanted item in an array.
  - (how?)   The source array should stay unchannged.
*/

const without = function(source, itemsToRemove) {
  //let output = source;    //I don't know why this line will change the original source array. I have to try
  // the following 4 lines. And they work. Weird!
  let output = [];
  for (let index = 0; index < source.length; index++) {
    output.push(source[index]);
  }

  for (let i = 0; i < source.length; i++) {
    //for (let j = 0; j < itemsToRemove.length; j++) {
      //if (source[i] === itemsToRemove[j]) {
    if (itemsToRemove.includes(source[i])) {  
      output.splice(i, 1);
    }
  }
  return output;
};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
//console.log(without(words, ["lighthouse"]));
//console.log(words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);