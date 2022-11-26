const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
- Take in an obj and a value. Scan the obj and return the FIRST key which contains the given value.
  - Start by declaring the fn.
  - Write a test.
  - Iterate over all key-value pairs.
  - Return the first key with the given value.
- Return "undefined" if there's no key with that given value.
*/

const findKeyByValue = function(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) 
      return key;
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const obj1 = {
  a: "hello",
  b: 42,
  c: true
};
assertEqual(findKeyByValue(obj1, "hello"), "a");
assertEqual(findKeyByValue(obj1, 42), "b");
assertEqual(findKeyByValue(obj1, false), undefined);