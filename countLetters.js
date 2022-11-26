const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
- Take in a string and return a count of each of the letters in that string.
  - Start by define a fn.
  - Loop through all the characters in the string.
  - Increment the count of each character into "results".
  - Add an "if" condition to only increment the count in "results" if the character is one of the 26 English letters.
*/

const countLetters = function(str) {
  const results = {};
  
  for (const character of str) {
    if (character !== " ") {
      if (results[character]) {
      //if (character in results) {
        results[character] += 1;
      } else {
        results[character] =1;
      }
    }
  }

  return results;
};

const output = countLetters("lighthouse in the house");
assertEqual(output["l"], 1);
assertEqual(output["i"], 2);
assertEqual(output["g"], 1);
assertEqual(output["h"], 4);
assertEqual(output["t"], 2);
assertEqual(output["o"], 2);
assertEqual(output["u"], 2);
assertEqual(output["s"], 2);
assertEqual(output["e"], 3);
assertEqual(output["n"], 1);
