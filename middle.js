
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

const middle = function(array) {
  // Take an array
  // Use a function to find the middle on an array
  let mid = array.length / 2;
  let midIndex = Math.floor(mid);
  let midIndexOther = false;
  
  // If mid is an integer, the number is even so we need to have two values
  // mid will equal the second of the two middle values, so we need the value before it
  if (Number.isInteger(mid)) {
    midIndexOther = midIndex - 1; 
  }

  const midVal = []

  if (array.length < 3)  {
    // If the array has 1 or 2 values, return an empty array
    // Return
    return midVal;
  } else if (!midIndexOther){
    // If it's odd number of values, midIndexOther is false
    // Push the one value to the array
    midVal.push(array[midIndex]);
  } else {
    // Otherwise there's two values that we need to push to the array
    midVal.push(array[midIndexOther]);
    midVal.push(array[midIndex]);
  }

  return (midVal);

  // If it's even number of values, it should be two values
};


middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

// TEST
assertArraysEqual(middle([1]), []) // PASS
assertArraysEqual(middle([1, 2]), []) // PASS
assertArraysEqual(middle([1, 2, 3]), [2]) // PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // PASS
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // PASS
