function hasTargetSum(array, target) {
  const showNumbers = new Set();

  for (const num of array) {
    const complement = target - num;
    if (showNumbers.has(complement)) {
      return true;
    }
    showNumbers.add(num);
  }
  return false;
}
console.log(hasTargetSum([7,5,8,9],12))

/* 
  Write the Big O time complexity of your function here
  O(1) (for each element) × n = O(n)

*/

/* 
  Add your pseudocode here
*/

/*
  We start by creating an empty Set called showNumbers.
  This Set will help us keep track of numbers we've already looked at as we go through the array.
  We loop through each number (num) in the array
  For each number, we calculate the complement, which is the number that would complete the pair to reach the target sum.
  Example: If target is 12 and num is 5, then complement would be 7, because 5 + 7 = 10.
  



*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
