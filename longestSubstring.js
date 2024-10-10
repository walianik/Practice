// longest substring without repeating character
//abcabcbb
function longestSubstring(str){
    if(!str.length){
        return 0;
    }
    let start=0;
    let end=0;
    let maxLength=0;
    const uniqueCharacter=new Set()
    while(end<str.length){
        if(!uniqueCharacter.has(str[end])){
            uniqueCharacter.add(str[end]);
            end++;
            maxLength=Math.max(maxLength,uniqueCharacter.size)
        }else{
            uniqueCharacter.delete(str[start])
            start++;
        }
    }
    return maxLength;
}
console.log(longestSubstring('abcabcbb'))