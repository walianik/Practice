// [
//     {name:'nikhil',email:'nikhilkaral16@gmail.com'},
//     {name:'abc',email:'abc@gmail.com'},
//     {name:'def',email:'def@gmail.com'}
// ]

function linearSearch(array, val){
    for(let key of array){
        if(key['name']===val){
            return true;
        }
    }
    return false;

}
console.log(linearSearch([
    {name:'nikhil',email:'nikhilkaral16@gmail.com'},
    {name:'abc',email:'abc@gmail.com'},
    {name:'def',email:'def@gmail.com'}
],'nikhil'))