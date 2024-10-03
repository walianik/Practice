//[-1,0,1,2,-1,-4]

function checkTriplets(array) {
  let obj = {};
  let set = new Set();

  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = (obj[array[i]] || 0) + 1;
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      value = -(array[i] + array[j]);
      if (obj[value]>0) {
        let triplet = [array[i], array[j], value]
          .sort((a, b) => a - b)
          .toString();
        set.add(triplet);
        obj[array[i]] = obj[array[i]] - 1;
        obj[array[j]] = obj[array[j]] - 1;

      }
    }
  }
  return set;
}
console.log(checkTriplets([-1,0,1,2,-1,-4]))
