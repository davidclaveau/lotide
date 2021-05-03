const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};

  string = string.split(" ").join("");

  for (const letter of string) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  
  return results;
};

module.exports = countLetters;

// console.log(countLetters("lighthouse in the house"));

// Test
// const expectTest = {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// };


// assertEqual(countLetters("lighthouse in the house")["l"], expectTest["l"]);
// assertEqual(countLetters("lighthouse in the house")["i"], expectTest["i"]);
// assertEqual(countLetters("lighthouse in the house")["g"], expectTest["g"]);
// assertEqual(countLetters("lighthouse in the house")["h"], expectTest["h"]);
// assertEqual(countLetters("lighthouse in the house")["t"], expectTest["t"]);
// assertEqual(countLetters("lighthouse in the house")["o"], expectTest["o"]);
// assertEqual(countLetters("lighthouse in the house")["u"], expectTest["u"]);
// assertEqual(countLetters("lighthouse in the house")["s"], expectTest["s"]);
// assertEqual(countLetters("lighthouse in the house")["e"], expectTest["e"]);
// assertEqual(countLetters("lighthouse in the house")["n"], expectTest["n"]);