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

const without = function(source, itemsToRemove) {
  let newArray = [];

  for (let i = 0;  i <  source.length; i++) {
    
    newArray.push(source[i]);
    for (let j = 0;  j <  itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        // If they match, pop off the value that was added before
        newArray.pop();
      }
    }
  }

  return newArray;
};

module.exports = without;

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => PASS

// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => PASS

// // TEST
// // Make sure the arrays aren't changed
// const valuesOne = ["1", 2, 3, "4", 4];
// const valuesTwo = [1, 2, "4"];

// console.log(without(valuesOne, valuesTwo));
// console.log("valuesOne:", valuesOne);
// console.log("valuesTwo:",valuesTwo);
// assertArraysEqual(without(valuesOne, valuesTwo), ["1", 3, 4]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);