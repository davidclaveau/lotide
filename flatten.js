const assertArraysEqual = function(actual, expected) {
  let truthCount = 0;
  for (let val = 0; val < actual.length; val++) {
    if (actual[val] !== expected[val]) {
      // Return false if any of the values don't perfectly match
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      break;
    } else {
      truthCount++;
    }
  }

  if (truthCount === expected.length) {
    // truthCount only equals expected.length if every value matched perfectly
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (truthCount !== expected.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  // If the lengths are different, they don't match and can end the code
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  // Return false if any of the values don't perfectly match
  for (let val = 0; val < arrayOne.length; val++) {
    if (arrayOne[val] !== arrayTwo[val]) {
      return false;
    }
  }
  // If able to exit the loop/if statement, all values match and return true
  return true;
};

const flatten = function(values, arr) {
  let flattenedArr = [];

  if (arr) {
    // If arr exists, pass values to flattenedArr
    flattenedArr = arr;
  }

  for (value of values) {
    // If this is a nested array, recall the function and pass current flattenedArr
    // Else, push the number to flattenedArr
    Array.isArray(value) ? flatten(value, flattenedArr) : flattenedArr.push(value);
  }
  return flattenedArr;
};


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => PASS

// Test recursion
console.log(flatten([1, 2, [3, 4, [5, 6]], 7, [8]])); // => [1, 2, 3, 4, 5, 6]

console.log(flatten([1, 2, [3, 4, [5, 6, [7, 8, 9]]], 10, [11]])); // => PASS
assertArraysEqual(flatten([1, 2, [3, 4, [5, 6, [7, 8, 9]]], 10, [11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]); // => PASS