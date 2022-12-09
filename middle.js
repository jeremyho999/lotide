/*
- Take in an array and return the middle-most element(s) of the given array.
  - Should return an array.
  - Should return an array with 1 single middle element, if the given array has an odd number of elements.
  - Should return an array with 2 middle elments, if the given array has an even number of elements.
  - Should return an empty array, if the given array has at most 2 elements.
*/

const middle = function(arr) {
  let output = [];
  
  if (arr.length < 3) {
    output = [];
  } else if (arr.length % 2 !== 0) {
    output.push(arr[(arr.length - 1) / 2]);
  } else {
    output.push(arr[arr.length / 2 - 1]);
    output.push(arr[arr.length / 2]);
  }
  return output;
};


module.exports = middle;