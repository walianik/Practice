// Input: [-5,-4,-3,-2,0,2,4,6,8]
// Output: [-4,4]
// Explanation: -4+4=0.

function checkSumZero(array){
    let left=0;
    let right=array.length-1;

    while(left<right){
        if(array[left]+array[right]===0){
            return [array[left],array[right]];
        }else if( array[left] +array[right]>0){
            right--;
        }else{
            left++
        }
    }
}
console.log(checkSumZero([-5,-4,-3,-2,0,2,4,6,8]))
