//[2,3,1,4]

let i = 0;
let j = 1;
let arrayResult = [];
function checkSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}
// console.log(checkSort([2,3,1,4]))

function sort(array) {
  if (checkSort(array)) {
    arrayResult = array;
    return;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    sort(array);
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    sort(array);
  }
}
sort([2, 3, 1, 4, 6, 5, 9, 8, 7]);
console.log(arrayResult, "sorted result");












// Write a function that accepts an array of integers and returns an array of all permutations of the given integers. You should return unique permutations, even if the input contains duplicates.

// Example:

// Input: [1, 2, 2]
// Output: [
//  [1, 2, 2],
//  [2, 1, 2],
//  [2, 2, 1]
// ]

// 🔎 Challenge: Can you solve this using backtracking with an optimized approach to handle duplicate values?
