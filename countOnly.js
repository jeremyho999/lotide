const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
- Take in an array and an object. Return an obj containing counts of everything that the input obj listed.
  - Start by declaring the fn.
  - *** Write a test first. Run your code to make sure all the assertions fail, before you can work on fixing them.
  - Fix 1st TypeError by having the fn define a new empty object called "results", and return it.
  - Loop over the array of allItems, and print all the items to the console.
  - Simply count everything (requiring lesser logic and less specifically.(Increment the count of each item into "results".)
  - Add an "if" condition to only increment our count in "results" if the item is found in "itemsToCount".
*/

const countOnly = function(allItems, itemsToCount) {
  const results = {};     //a bit confusing here. This results object will be changed and not a Constant, 
                          //why not use "let"???
  
  for (const item of allItems) {
    //console.log(item);
    if (itemsToCount[item]) {       //Since itemsToCount["Agouhanna"]===false, so, this line woks too.
    //if (itemsToCount[item] === true) {
      //if (item in results) {      //this way also works.
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {Jason: true, "Karima": true, Fang: true, Agouhanna: false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);