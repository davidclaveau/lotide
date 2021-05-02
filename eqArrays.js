// FUCNTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // If actual === expected
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  // If the lengths are different, they don't match and can end the code
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
      // Not arrays, compare each value 
      if (arrayOne[val] !== arrayTwo[val]) {
      
        return false;
      }
    }
  }
  
  return true;
};

console.log(eqArrays(
  [[2, 3], [4]],
  [[2, 3], [4]])); // => true

console.log(eqArrays(
  [[2, 3], [4]],
  [[2, 3], [4, 5]])); // => false

console.log(eqArrays(
  [[2, 3], [4]],
  [[2, 3], 4])); // => false
  
console.log(eqArrays(
  [[2, 3], [4], [5, [6,7]]],
  [[2, 3], [4], [5, [6, 7, 8]]])); // => false
  
// TEST
// console.log(assertEqual(eqArrays(
//   [[2, 3], [4]],
//   [[2, 3], [4]]), true)); // => PASS

// console.log(assertEqual(eqArrays(
//   [[2, 3], [4]],
//   [[2, 3], [4, 5]]), false)); // => PASS

// console.log(assertEqual(eqArrays(
//   [[2, 3], [4]],
//   [[2, 3], 4]), false)); // => PASS

// console.log(assertEqual(eqArrays(
//   [[2, 3], [4], [5, [6,7]]],
//   [[2, 3], [4], [5, [6, 7, 8]]]), false)); // => PASS