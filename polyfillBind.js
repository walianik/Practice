// bind method

const obj={
    firstName:'nikhil',
    lastName:'karal'
}

function printName(check,bye){
    console.log(this.firstName, this.lastName,check,bye)
}
// const get=printName.bind(obj,'hello');
// get('bye')

// polyfill for bind method


Function.prototype.myBind=function (...args){
    console.log(args,'arg')
    let obj1=this
    params=args.slice(1)
    return function(...args2){
        obj1.apply(args[0],[...params,...args2])
    }
}
const store=printName.myBind(obj,'hello');
store('bye')
