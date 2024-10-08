// hello world
// result: l

const findMaximumOccuringCharacter=(string)=>{
    let map={};
    for(let i=0;i<string.length;i++){
        if(string[i] !==' ')
        map[string[i]]=(map[string[i]] || 0) + 1;
    }

    let max=1;
    char=string[0];
    for( let key in map){
        if(map[key]>max){
            max=map[key];
            char=key
        }
    }
    return char;
}
console.log(findMaximumOccuringCharacter('hello world'))