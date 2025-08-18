function merge(arr1, arr2) {
  let m = arr1.length, n = arr2.length;
  let i = m - 1, j = 0;
  while (i >= 0 && j < n) {
    if (arr1[i] > arr2[j]) {
      [arr1[i], arr2[j]] = [arr2[j], arr1[i]];
    }
    i--;
    j++;
  }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  return [arr1, arr2];
}
console.log(merge([1, 3, 5], [2, 4, 6]));   
//OUTPUT:- [ [1, 2, 3], [4, 5, 6] ]
