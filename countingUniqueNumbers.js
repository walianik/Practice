// Couting Unique Numbers
// [1,2,2,3,3,4,4,5,6,6,7];

function countUniqueNumbers(array){
    const result=[]
    for(let i=0;i<array.length;i++){
        if(array[i] !== array[i+1]){
            result.push(array[i])
        }
    }
    return result
}
console.log(countUniqueNumbers([1,2,2,3,3,4,4,5,6,6,7]))