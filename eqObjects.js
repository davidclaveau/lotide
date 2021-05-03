const assertEqual = function(actual, expected) {
  // If actual === expected
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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

    // If it's an object, pass it back into the function
    } else if (typeof object1[key] === 'object') {

      return eqObjects(object1[key], object2[key]);

    // Compare the primitive data types
    } else if (object1[key] !== object2[key]) {
      
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;

// console.log("test 1: ", eqObjects(
//   { a: { z: 1 }, b: 2 },
//   { a: { z: 1 }, b: 2 })); // => true

// console.log("test 2: ", eqObjects(
//   { a: { y: 0, z: 1 }, b: 2 },
//   { a: { z: 1 }, b: 2 }
// )); // => false

// console.log("test 3: ", eqObjects(
//   { a: { y: 0, z: 1 }, b: 2 },
//   { a: 1, b: 2 }
//   )); // => false)

// console.log("test 4: ", eqObjects(
//   {
//     a:
//       {
//         y: 0,
//         z:
//           {
//             j: 3,
//             k: 2
//           }
//       },
//     b: 2
//   },
//   {
//     a:
//       {
//         y: 0,
//         z:
//           {
//             j: 3,
//             k: 2
//           }
//       },
//     b: 2
//   }
//   )); // => true)