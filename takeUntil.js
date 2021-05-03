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

const takeUntil = (array, callback) => {
  const result = [];
  
  for (const element of array) {
    const callbackStatus = callback(element);
    if (callbackStatus) {
      return result;
    } else {
      result.push(element);
    }
  }
  return result;
};

module.exports = takeUntil;

// const data1 = [ 1, 2, 5, 7, 2 ];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// console.log('---');

// const data3 = [1, 2, 5, 7, 2, 2, 4, 5];
// const results3 = takeUntil(data3, x => x < 0);
// console.log(results3);

// // TEST
// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // PASS
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); // PASS
// assertArraysEqual(results3, [1, 2, 5, 7, 2, 2, 4, 5]); // PASS
