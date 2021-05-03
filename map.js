const assertArraysEqual = function(actual, expected) {
  return (eqArrays(actual, expected));
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (let val = 0; val < arrayOne.length; val++) {
    
    // Check if the current values are arrays
    if (Array.isArray(arrayOne[val]) && Array.isArray(arrayTwo[val])) {
      
      // Run through the function again, only return if returning false
      if (!eqArrays(arrayOne[val], arrayTwo[val])) {
        return false;
      }
    } else {
      // If not arrays, compare each value
      if (arrayOne[val] !== arrayTwo[val]) {
      
        return false;
      }
    }
  }
  
  return true;
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word[1]);
// const results3 = map(words, word => word[2]);

// // TEST
// console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])); // PASS
// console.log(assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ])); // PASS
// console.log(assertArraysEqual(results3, [ 'o', 'n', undefined, 'j', 'm' ])); // PASS