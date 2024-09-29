// Input: nums = [0,1,1,0]
// Output: [0,1]
// Explanation:
// The numbers 0 and 1 each appear twice in the array.

function getSneakyNumbers(array){
    const count={};
    const put=[];
    for(let i=0;i<array.length;i++){
        console.log(array[i])
        count[array[i]]=(count[array[i]] || 0) + 1;
    }
    for(let key in count){
        if(count[key]>1){
            put.push(+key)
        }
    }
    return put
}
console.log(getSneakyNumbers([0,3,2,1,3,2]))