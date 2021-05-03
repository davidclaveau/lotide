const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// TESTS
assertEqual(eqArrays(
  [[2, 3], [4]],
  [[2, 3], [4]]), true); // => true

assertEqual(eqArrays(
  [[2, 3], [4]],
  [[2, 3], [4]]), true); // => PASS

assertEqual(eqArrays(
  [[2, 3], [4]],
  [[2, 3], [4, 5]]), false); // => PASS

assertEqual(eqArrays(
  [[2, 3], [4]],
  [[2, 3], 4]), false); // => PASS

assertEqual(eqArrays(
  [[2, 3], [4], [5, [6,7]]],
  [[2, 3], [4], [5, [6, 7, 8]]]), false); // => PASS