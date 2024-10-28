[2,3,9,6,4,5,7,8,1];

function findSecondLargestNumber(array){
    let largest=Number.MIN_VALUE;
    let secondLargest=Number.MIN_VALUE
    for(let i=0;i<array.length;i++){
        // console.log(array[i])
        if(largest<array[i]){
            secondLargest=largest;
            largest=array[i]
        }else if(secondLargest<array[i] && largest> array[i]){
            secondLargest=array[i]
        }else if(secondLargest===Number.MIN_VALUE){
            return -1
        }
    }
    return secondLargest
}
console.log(findSecondLargestNumber([2,3,9,6,4,5,7,8,1]))
