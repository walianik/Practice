// String Anagram
// 'hello' -> 'lleho'

function checkAnagram(string1, string2) {
    if(string1.length!==string2.length){
        return 0;
    }
  const obj1 = {};
  for (let char of string1) {
    obj1[char] = (obj1[char] || 0) + 1;
  }
  for (let char of string2) {
    if (obj1[char]) {
      obj1[char] = obj1[char] - 1;
    } else {
      return 0;
    }
  }
  return 1;
}
console.log(checkAnagram("hello", "llheo"));
