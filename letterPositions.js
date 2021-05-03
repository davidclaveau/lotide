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

const letterPositions = function(sentence) {
  const results = {};

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

module.exports = letterPositions;

// console.log(letterPositions("lighthouse in the house"));

// // TEST
// const expectTest = { h: [ '0' ], e: [ '1' ], l: [ '2', '3' ], o: [ '4' ] };

// assertArraysEqual(letterPositions("hello")["h"], expectTest["h"]);
// assertArraysEqual(letterPositions("hello")["e"], expectTest["e"]);
// assertArraysEqual(letterPositions("hello")["l"], expectTest["l"]);
// assertArraysEqual(letterPositions("hello")["o"], expectTest["o"]);