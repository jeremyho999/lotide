const assertEqual = require("../assertEqual");
const tail = require("../tail");


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Hello", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const tailedArr = tail([]);
assertEqual(tailedArr.length, 0);

const tailedResult = tail([1]);
assertEqual(tailedResult.length, 0);