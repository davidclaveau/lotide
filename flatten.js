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

const flatten = function(values) {
  const flattenedArr = [];

  for (value of values) {
    if (Array.isArray(value)) {
      for (innerValue of value) {
        flattenedArr.push(innerValue);
      }
    } else {
      flattenedArr.push(value)
    }
  }
  return flattenedArr;
};


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

// TEST
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => PASS
assertArraysEqual(flatten([1, 2, [3, 4], [5, 6], [7, 8, 9], 10, [11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]); // => PASS