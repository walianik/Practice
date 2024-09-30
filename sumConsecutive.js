// [1,2,3,5,4,3,6,7,8]
// to add 4 consecutive digits


function largestSumOfConsecutiveDigits(array,number){
    let max=0
    for(let i=0;i<(array.length-number+1);i++){
        let sum=0;
        for(let j=0;j<number;j++){
            sum+=array[i+j]
            if(sum>max){
                max=sum
            }
        }

    }
return max
}
console.log(largestSumOfConsecutiveDigits([1,2,3,5,4,3,6,7,8],4))