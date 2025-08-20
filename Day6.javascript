function findZeroSumSubarrays(arr) {
  let prefixSum = 0;
  let map = new Map();  
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    if (prefixSum === 0) {
      result.push([0, i]);
    }

    if (map.has(prefixSum)) {
      let indices = map.get(prefixSum);
      for (let startIdx of indices) {
        result.push([startIdx + 1, i]);  
      }
    }

    if (!map.has(prefixSum)) {
      map.set(prefixSum, []);
    }
    map.get(prefixSum).push(i);
  }

  return result;
}
console.log(findZeroSumSubarrays([1, 2, -3, 3, -1, 2]));
//OUTPUT:- [(0, 2), (1, 3)]

console.log(findZeroSumSubarrays([4, -1, -3, 1, 2, -1]));
//OUTPUT:- [(1, 2), (0, 3)]