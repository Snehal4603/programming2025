function findMissingNumber(arr) {
  const n = arr.length + 1;  // since array has n-1 elements
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 4, 5]));
// output:-3
