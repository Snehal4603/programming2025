function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let first = strs[0];
  for (let i = 0; i < first.length; i++) {
    let char = first[i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        
        return first.substring(0, i);
      }
    }
  }

  return first;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); 
//Output:- "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
//Output:- ""
