const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
- Take in an object and a callback. Scan the obj and return the first key for which the cb returns a truthy value.
- If no key is find, then it should return undefined.
*/

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key]))
      return key;
  }
  return undefined;
};

const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const result1 = findKey(obj1, x => x.stars === 2); // => "noma"
//console.log(result1);
assertEqual(result1, "noma");
const result2 = findKey(obj1, x => x.stars === 4);
assertEqual(result2, undefined);

const obj2 = {
  a: {species: "dog"},
  b: {species: "cat"},
  c: {species: "fish"},
  d: {species: "cat"},
  e: {species: "dog"}
};
const result3 = findKey(obj2, x => x.species === "cat");
assertEqual(result3, "b");
const result4 = findKey(obj2, x => x.species === "cow");
assertEqual(result4, undefined);