const head = require('../head');
const assertEqual = require('../assertEqual');

// TESTS
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello"]), "Hello");
assertEqual(head([]), "Hello");