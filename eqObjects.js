const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }

  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
- Take in 2 objects and return true or false based on a perfect match.
  - Start by defining the fn.
  - Write a test.
  - Check if 2 objects has the same number of keys using "Object.keys(obj)". Stop the test if not, and return false.
  - Loop through the keys returned by "Object.keys" for one of the objects.
  - Check if both objects' values for each key are the same. Stop the test if not, and return false.
  - After the loop, return true, if everything passes the above 2 tests.
  🔻🔻🔻For objects containing values of arrays:
  - Write a test first!
  - Copy/paste "eqArrays" function.
*/

const eqObjects = function(object1, object2) {
  /* The following one works too.
  if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;
    
  for (const key in object1) {
    if (object1[key] !== object2[key])
      return false;
  }
  */
  
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

const shirtObject = {color: "red", size: "medium"};
const anotherShirtObject = {size: "medium", color: "red"};
console.log(eqObjects(shirtObject, anotherShirtObject));

const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long"};
console.log(eqObjects(shirtObject, longSleeveShirtObject));

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = {color: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = {size: "medium", color: ["red", "blue"]};
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));

const longSleeveMultiColorShirtObject = {size: "medium", color: ["red", "blue"], sleeveLength: "long"};
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));

assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);