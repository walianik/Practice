// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const array=[5,6,3,1,6,7,2];


function checkSort(array){
    for(let i=0;i<array.length;i++){
        if(array[i]>array[i+1]){
            return false
        }
    }
    return true;
}
function sortArray(array){
    let i=0;
    let j=1;
    while(j<array.length){
        
        if(checkSort(array)){
            return array;
        }
        if(array[i]>array[j]){
            [array[i],array[j]]=[array[j],array[i]];
            i=0;
            j=1;
            sortArray(array)
        }else{
            i++;
            j++
        }
    }
}
console.log(sortArray(array))