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

const flatten = function(values) {
  const flattenedArr = [];

  for (const value of values) {
    if (Array.isArray(value)) {
      for (const innerValue of value) {
        flattenedArr.push(innerValue);
      }
    } else {
      flattenedArr.push(value);
    }
  }
  return flattenedArr;
};

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

// // TEST
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => PASS
// assertArraysEqual(flatten([1, 2, [3, 4], [5, 6], [7, 8, 9], 10, [11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]); // => PASS