var sortColors = function(arr) {
  let shift = 0;  
  for (let i = 0; i < arr.length; i++) {
    const index = i + shift;
    if (arr[index] === 0) {
        arr.unshift(...arr.splice(index, 1));
    } else if (arr[index] === 2) {
        arr.push(...arr.splice(index, 1));
        shift--;
    }
  }
};
