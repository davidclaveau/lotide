
const middle = function(array) {
  // Find the middle on an array
  let mid = array.length / 2;
  let midIndex = Math.floor(mid);
  let midIndexOther = false;
  
  // If mid is an integer, the number is even so we need to have two values to use
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
  console.log("midVal", midVal)
  return (midVal);
};

module.exports = middle;
