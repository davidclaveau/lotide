const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  return (eqArrays(actual, expected));
};

module.exports = assertArraysEqual;