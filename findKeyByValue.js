const assertEqual = function(actual, expected) {
  // If actual === expected
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {

  // Loop through the object for each key
  for (const key in object) {
    // Search the value related to the key
    // If it matches the value, return key
    if (object[key] === value) {
      return key;
    }
  }
  // Otherwise, return nothing (undefined)
  return;
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  reality: "Big Brother",
  soap_opera: "Days of our Lives"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"))

// TEST

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "Big Brother"), "reality"); // PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "Days of our Lives"), undefined);