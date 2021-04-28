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

const letterPositions = function(sentence) {
  const results = {};
  
  // Remove spaces
  sentence = sentence.split(" ").join("");

  for (const index in sentence) {
    // Hold the current letter in the sentence
    const letter = sentence[index];

    if (results[letter]) {
      // If the letter already exists, push the index to the array
      results[letter].push(index);
    } else {
      // If it appears for the first time, set the array as the current index
      results[letter] = [index];
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));

// TEST
const expectTest = { h: [ '0' ], e: [ '1' ], l: [ '2', '3' ], o: [ '4' ] };

assertArraysEqual(letterPositions("hello")["h"], expectTest["h"]);
assertArraysEqual(letterPositions("hello")["e"], expectTest["e"]);
assertArraysEqual(letterPositions("hello")["l"], expectTest["l"]);
assertArraysEqual(letterPositions("hello")["o"], expectTest["o"]);