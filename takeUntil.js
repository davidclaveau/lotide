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

const takeUntil = (array, callback) => {
  const result = [];
  
  for (const element of array) {
    const callbackStatus = callback(element);
    if (callbackStatus) {
      // if callback evaluates to true, return result as it is currently
      return result;
    } else {
      // Push the value otherwise
      result.push(element);
    }
  }
  return result;
};


const data1 = [ 1, 2, 5, 7, 2 ];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = [1, 2, 5, 7, 2, 2, 4, 5];
const results3 = takeUntil(data3, x => x < 0);
console.log(results3);

// TEST
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // PASS
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); // PASS
assertArraysEqual(results3, [1, 2, 5, 7, 2, 2, 4, 5]); // PASS
