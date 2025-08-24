function groupAnagrams(strs) {
  if (strs.length === 0) return [[""]]; 

  let map = new Map();

  for (let word of strs) {
    // Sort letters in word (anagram signature)
    let sorted = word.split("").sort().join("");

    if (!map.has(sorted)) {
      map.set(sorted, []);
    }

    map.get(sorted).push(word);
  }

  return Array.from(map.values());
}

//  Test Cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
//OUTPUT:- [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams([""]));
//OUTPUT:- [[""]]

console.log(groupAnagrams(["a"]));
//OUTPUT:- [["a"]]

console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "zyx", "yxz"]));
//OUTPUT:- [["abc", "bca", "cab"], ["xyz", "zyx", "yxz"]]

console.log(groupAnagrams(["abc", "def", "ghi"]));
//OUTPUT:- [["abc"], ["def"], ["ghi"]]
