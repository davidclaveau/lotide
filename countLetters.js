const assertEqual = function(actual, expected) {
  // If actual === expected
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};

  // Remove spaces
  string = string.split(" ").join("");

  // Count through each letter of the string
  for (const letter of string) {
    if (results[letter]) {
      // If the letter already exists, add 1
      results[letter] += 1;
    } else {
      // If it appears for the first time, set value as 1 to the key
      results[letter] = 1;
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));

// Test
const expectTest = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

assertEqual(countLetters("lighthouse in the house")["l"], expectTest["l"]);
assertEqual(countLetters("lighthouse in the house")["i"], expectTest["i"]);
assertEqual(countLetters("lighthouse in the house")["g"], expectTest["g"]);
assertEqual(countLetters("lighthouse in the house")["h"], expectTest["h"]);
assertEqual(countLetters("lighthouse in the house")["t"], expectTest["t"]);
assertEqual(countLetters("lighthouse in the house")["o"], expectTest["o"]);
assertEqual(countLetters("lighthouse in the house")["u"], expectTest["u"]);
assertEqual(countLetters("lighthouse in the house")["s"], expectTest["s"]);
assertEqual(countLetters("lighthouse in the house")["e"], expectTest["e"]);
assertEqual(countLetters("lighthouse in the house")["n"], expectTest["n"]);