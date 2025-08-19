function findLeaders(arr) {
  let n = arr.length;
  let leaders = [];
  let maxRight = arr[n - 1]; 
  leaders.push(maxRight);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] >= maxRight) {
      leaders.push(arr[i]);
      maxRight = arr[i];
    }
  }
  return leaders.reverse();
}

// TestCase
console.log(findLeaders([16, 17, 4, 3, 5, 2])); 
//OutPut:- [17, 5, 2]

console.log(findLeaders([1, 2, 3, 4, 0]));       
//OutPut:- [4, 0]
