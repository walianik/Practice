let sum = 0;

function add(n) {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// console.log(add(5))

function cacheSum(fun) {
  let cache = {};
  return function (...args) {
    let n = args[0];

    if (n in cache) {
      return cache[n];
    } else {
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
}
console.time();
let check = cacheSum(add);
console.log(check(5));
console.timeEnd();
console.time();
console.log(check(5));
console.timeEnd();
