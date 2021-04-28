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
  if (truthCount === (actual.length)) {
    // truthCount only equals actual.length if every value matched perfectly
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
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

const without = function(source, itemsToRemove) {
  let newArray = [];

  // Compare the itemsToRemove values to the source values
  for (let i = 0;  i <  source.length; i++) {
    // Always add the value from source to newArray
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



console.log(without([1, 2, 3], [1])); // => [2, 3]
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => PASS

console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => PASS

// TEST
// Make sure the arrays aren't changed
const valuesOne = ["1", 2, 3, "4", 4];
const valuesTwo = [1, 2, "4"];

console.log(without(valuesOne, valuesTwo));
console.log("valuesOne:", valuesOne);
console.log("valuesTwo:",valuesTwo);
assertArraysEqual(without(valuesOne, valuesTwo), ["1", 3, 4]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);