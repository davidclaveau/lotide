const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(actual, expected));
};

const eqArrays = function(arrayOne, arrayTwo) {

  const pass = `✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`;
  const fail = `🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`;

  // If the lengths are different, they don't match and can end the code
  if (arrayOne.length !== arrayTwo.length) {
    return fail;
  }
  // Return false if any of the values don't perfectly match
  for (let val = 0; val < arrayOne.length; val++) {
    if (arrayOne[val] !== arrayTwo[val]) {
      return fail;
    }
  }
  // If able to exit the loop/if statement, all values match and return true
  return pass;
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[2]);

// TEST
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])); // PASS
console.log(assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ])); // PASS
console.log(assertArraysEqual(results3, [ 'o', 'n', undefined, 'j', 'm' ])); // PASS