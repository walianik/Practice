// check if reverse of characters of a word is true or not
//dad,level
// nikhil is not a palindrome

const isPal=(str)=>{
let left=0;
let right=str.length-1;
while(right>left){
    if(str[right]!==str[left]) return false;
    left++;
    right--;
}
return true
}
console.log(isPal(121))