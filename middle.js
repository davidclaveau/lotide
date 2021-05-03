
const middle = function(array) {
  // Find the middle on an array
  let mid = array.length / 2;
  let midIndex = Math.floor(mid);
  let midIndexOther = false;
  
  // If mid is an integer, the number is even so we need to have two values
  // mid will equal the second of the two middle values, so we need the value before it
  if (Number.isInteger(mid)) {
    midIndexOther = midIndex - 1;
  }

  const midVal = [];
  if (array.length < 3)  {
    
    return midVal;
  } else if (!midIndexOther) {
    midVal.push(array[midIndex]);
  } else {
    // Otherwise there's two values that we need to push to the array
    midVal.push(array[midIndexOther]);
    midVal.push(array[midIndex]);
  }

  return (midVal);
};

module.exports = middle;
