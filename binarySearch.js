// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
// number to search --> 7

function binarySearch(array,number){

    let left=0;
    let right=array.length-1;
    while(left<right){
        let midIndex=Math.floor((right+left)/2);
        if(array[midIndex]<number){
            left=midIndex+1
        }else if(array[midIndex]>number){
            right=midIndex-1;
        }
        else{
            return midIndex;
        }
    }
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],7))