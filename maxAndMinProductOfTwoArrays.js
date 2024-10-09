// Input : arr1 = [5, 7, 9, 3, 6, 2],  arr2 = [1, 2, 6, 1, 9]
// Output : 9
// Explanation: The max in arr1 is 9. The min element in arr2 is 1. The product is 9*1 = 9.

function productMaxAndMin(arr1,arr2){
    let max=arr1[0];
    let min=arr2[0]
    for(let i =0;i<arr1.length;i++){
        if(arr1[i]>max){
            max=arr1[i]
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(arr2[i]<min){
            min=arr2[i]
        }
    }
    return max*min; 
}
console.log(productMaxAndMin([5, 7, 9, 3, 6, 2],[1, 2, 6, 1, 9]))