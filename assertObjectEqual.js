const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;
  const response = eqObjects(actual, expected);

  if (response === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {

  // Return false if any of the values don't perfectly match
  for (let val = 0; val < arrayOne.length; val++) {
    if (arrayOne[val] !== arrayTwo[val]) {
      return false;
    }
  }
  // If able to exit the loop/if statement, all values match and return true
  return true;
};

const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  // Check to make sure the keys are the same length
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  // Compare each key's value in both objects
  for (const key in object1) {
    
    // Check if the current key is an array
    if (Array.isArray(object1[key])) {
      
      // Check if object2's key is also an array
      if (!Array.isArray(object2[key])) {
        return false;

      // Check if object2's key array is the same length
      } else if (object1[key].length !== object2[key].length) {
        return false;

      // Check if the two arrays are equal
      } else if (!eqArrays(object1[key], object2[key])) {
        return false;
      }

    // If not an array, compare each key and value
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const a = {
  name: "David",
  city: "Victoria",
  favFood: "Spaghetti"
};

const b = {
  name: "David",
  city: "Victoria",
  favFood: "Spaghetti"
};

assertObjectsEqual(a,b);
