// Input: n = 3, arr[] = {1, 2, 3}
// Output: 1
// Explanation: If the index returned is 2, then the output printed will be 1. Since arr[2] = 3 is greater than its adjacent elements, and there is no element after it, we can consider it as a peak element. No other index satisfies the same property, so answer will be printed as 0.

function peakElement(array) {
    for (let i = 0;i < array.length;i++) {
        if (array[i] >= array[i + 1] && array[i] >=array[i-1]) {
            return i;
        }
        if(i===(array.length-1) && array[i]>=array[i-1]){
            return i;
        }
    }
return 0;
}
console.log(peakElement([1, 2, 3]))
