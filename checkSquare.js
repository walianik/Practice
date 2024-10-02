// array1=[1,2,3,4] array2=[1,9,4,16]

function checkSquare(array1,array2){
    for(let i=0;i<array1.length;i++){
        let isSquare=false;
        for(let j=0;j<array2.length;j++){
            if(array1[i]*array1[i]===array2[j]){
                isSquare=true;
            }
            if(j===array2.length-1){
                if(!isSquare){
                    return false;
                }
            }
        }
    }
    return true;
}
console.log(checkSquare([1,2,3,4],[1,9,4,16]))


// optimized approach

function checkSquareOptimized(array1,array2){
    let map1={}
    let map2={}

    for(value of array1){
        map1[value]=(map1[value] || 0) + 1;
    }
    for(value of array2){
        map2[value]=(map2[value] || 0) + 1;
    }
    for(let key in map1){
        if(!map2[key*key]){
            return false
        }
        if((map1[key]!==map2[key*key])){
            return false
        }
    }
    return true;
}
console.log(checkSquareOptimized([1,2,3,4],[1,9,4,16]))