# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @daveclaveau/lotide`

**Require it:**

`const _ = require('@daveclaveau/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: returns the zeroeth indexed value of an array.
* `tail(arr)`: returns the tail of the array, which is everything but the zeroethvalue of the array.
* `middle(arr)`: take in an array and return the middle-most element(s) of the given array.
* `countLetters(str)`: returns how many times a letter appears in a string.,
* `countOnly(arr, obj)`: returns how many times a value appears in an array.
* `eqArrays(arr)`: returns true or false if two arrays are the same.
* `eqObjects(obj)`: returns true or false if two objects are the same.
* `findKey(obj, cb)`: takes in an object and a callback. Scans the object and returns the first key for which the callback returns a truthy value.
* `findKeyByValue(objm str)`: finds the first key on an object where its value matches a given value.
* `flatten(arr)`: take in an array, up to one nested arrays of elements, and returns a "flattened" version of the array.
* `letterPositions(str)`: returns all the indices in a string where each character is found.
* `map(arr, cb)`: takes two arguments, an array and a callback functions, and returns a new array based on the results of the callback function.
* `takeUntil(arr, cb)`: takes two parameters, an array and a callback function, and returns a slice of the array with elements taken from the beginning. Continues until callback returns a truthy value.
* `without(arr, itemToRemoveArr)`: returns a subset of a given array, removing unwanted elements.
