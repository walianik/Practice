0,1,1,2,3,5,8,13,21,34
let number=1
let start=0;
let second=1
let result=[0,1]
function printFibonacci(start,second,number){
    if(number>10){
        return;
    }
    result.push(start+second) 
    number++
    printFibonacci(second,start+second,number)
}
printFibonacci(start,second,number)
console.log(result)




// loop way
// let num=100;
// let sum=start+second;
// console.log(start)
// while(sum<num){
//     console.log(sum)
//     sum=start+second;
//     start=second;
//     second=sum;
// }
let results=[0,1]

for(let i=2;i<=10;i++){
    results[i]=results[i-1] + results[i-2]
}

console.log(results)
let count=1

function fibonacci(n) {
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
let n = 10; // Finding the 10th Fibonacci number
console.log(fibonacci(n)); 



// let count=1
function fibonacci(n, memo = {}) {
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Check if the result is already in the memo
    console.log(memo)
    if (memo[n]) return memo[n];

    // Calculate and store the result in the memo
    console.log('hello',count++)
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

    return memo[n];
}

// Example usage:
let n = 10; // Finding the 10th Fibonacci number
console.log(fibonacci(n));



