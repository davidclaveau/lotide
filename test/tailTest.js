const tail = require('../tail')
const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')

// TEST CODE
assertEqual(eqArrays(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Bootcamp"]), false); // FAIL
assertEqual(eqArrays(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]), true); // PASS