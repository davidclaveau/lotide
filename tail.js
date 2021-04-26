// FUCNTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // If actual === expected
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  // If actual and equal are arrays, and they have the same length
  } else if (typeof actual === "object" && typeof expected === "object" && actual.length === expected.length) {
    // Check that each value in the value is the same
    for (let pos = 0; pos < actual.length; pos++) {
      if (actual[pos] === expected[pos]) {
        console.log(`✅✅✅ Assertion Passed: ${actual[pos]}  === ${expected[pos]}`);
      } else {
        // If the values aren't the same, show which two failed
        console.log(`🛑🛑🛑 Assertion Failed: ${actual[pos]} !== ${expected[pos]}`);
      }
    }
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  // Remove the first value of the array and return it
  return arr.slice(1);
};

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Bootcamp"]); // => will always fail!