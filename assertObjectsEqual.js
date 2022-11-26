const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }

  return true;
};

const eqObjects = function(object1, object2) {  
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length)
    return false;

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key]))
        return false;
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

/*
- Take in 2 objects and print out an appropriate message to the console.
*/

const assertObjectsEqual = function(actual, expected) {
  //const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log("✅✅✅Assertion Passed:", actual, "===", expected);
  } else {
    console.log("🛑🛑🛑Assertion Failed:", actual, "!==", expected);
  }
};


const shirtObject = {color: "red", size: "medium"};
const anotherShirtObject = {size: "medium", color: "red"};
assertObjectsEqual(shirtObject, anotherShirtObject);

const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long"};
assertObjectsEqual(shirtObject, longSleeveShirtObject);

const multiColorShirtObject = {color: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = {size: "medium", color: ["red", "blue"]};
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = {size: "medium", color: ["red", "blue"], sleeveLength: "long"};
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);