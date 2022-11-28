const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
    
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
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


const map = function(array, callback) {
  //console.log("array: ", array);
  //console.log("callback: ", callback);
  const results = [];
  for (let item of array) {
    //console.log("item BEFORE: ", item);
    //console.log("item AFTER: ", callback(item));
    //console.log("---");
    results.push(callback(item));
  }
  
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const result1 = map(words, word => word[0]);
//console.log(result1);
assertArraysEqual(result1, ["g", "c", "t", "m", "t"]);

const numbers = [1, 2, 3, 4, 5];
const result2 = map(numbers, n => n * n);
assertArraysEqual(result2, [1, 4, 9, 16, 25]);

const animals = [
  {species: "dog", name: "Vivi"},
  {species: "cat", name: "Kitty"}
];
const result3 = map(animals, animal => animal.name);
assertArraysEqual(result3, ["Vivi", "Kitty"])

const trueFalseArray = [true, false, true, false];
const result4 = map(trueFalseArray, bool => !bool);
assertArraysEqual(result4, [false, true, false, true]);