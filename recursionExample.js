// recursion basics
let count=0
function callRecursive(){
    if(count>9){
        return
    }
console.log('hello' + count);
count++;
callRecursive()
}
callRecursive()

