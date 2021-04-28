const assertArraysEqual = function(actual, expected) {
  for (let val = 0; val < actual.length; val++) {
    if (actual[val] !== expected[val]) {
      // Return false if any of the values don't perfectly match
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      break;
    } else {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
      break;
    }
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
