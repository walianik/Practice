// [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
// [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]


// function sort012s(array){
//     let obj0s=[]
//     let obj1s=[]
//     let obj2s=[]
//     for(let i=0;i<=array.length-1;i++){
//         if(array[i]===0){
//             obj0s.push(array[i])
//         }
//         if(array[i]===1){
//             obj1s.push(array[i])
//         }
//         if(array[i]===2){
//             obj2s.push(array[i])
//         }
//     }
//    return [...obj0s,...obj1s,...obj2s]
// }


function sort012sOptimized(array){
    let min=0;
    let mid=0;
    let high=array.length-1;

    while(mid<=high){
        console.log(array[mid])
        if(array[mid]===1){
            mid++;
        }
        else if(array[mid]===0){
            [array[min],array[mid]]=[array[mid],array[min]];
            mid++;
            min++
        }else{
            [array[mid],array[high]]=[array[high],array[mid]]
            high--
        }
    }
return array
}
console.log(sort012sOptimized([0, 1, 2, 0, 1, 2]))