// [8,2,4,1,3]
// consider second element firr zhi se start krenge loop and then we will compare
const insertionSort=(array)=>{
    for(let i=1;i<array.length;i++){
        let curr=array[i];
        let j = i-1;
        while(j>=0 && array[j]>curr){
            array[j+1]=array[j];
            j--;
        }
        array[j+1]=curr;
    }
    return array
}
console.log(insertionSort([8,2,4,1,3]));
