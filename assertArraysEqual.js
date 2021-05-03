const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(actual, expected));
};

module.exports = assertArraysEqual;