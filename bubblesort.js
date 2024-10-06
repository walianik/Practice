//[2,4,3,1,7,9,8,6,5];
// consider the last element is largest and takes the largest element to last
function bubbleSort(array){
    for(let i=array.length;i>0;i--){
        for(let j =0;j<i-1;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]]
            }
        }
    }
return array;
}
console.log(bubbleSort([2,4,3,1,7,9,8,6,5]))

function bubbleSortOptimized(array){
    for(let i=array.length;i>0;i--){
        let isSwapped=false;  // this will check if any swapping is happening or not
        for(let j =0;j<i-1;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]]
                isSwapped=true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
return array;
}