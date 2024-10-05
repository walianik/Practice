//[1,2,3,4,5,6,7,8,9];


function findOdd(array){
    let result=[]
    function helperRecursive(inputArray){
        if(!inputArray.length){
            return
        }
        if(inputArray[0]%2!==0){
            result.push(inputArray[0])
        }
        helperRecursive(inputArray.slice(1))
    }
    helperRecursive(array)
    return result;
}
console.log(findOdd([1,2,3,4,5,6,7,8,9]))