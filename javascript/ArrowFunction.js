let arrowFunction = () => {
    console.log("arrow function");
}
arrowFunction();



let arrow2 = () => {
    console.log("arrow function", arguments);  //error, arguments keyword not work in arrowfunction -> arguments keyword work in normal function
}

// console.log(this); //this keyword work with console


let obj = {
    name: "raj",
    fun: function(){
        console.log(this); //consider object
    },
    arrow:() => { // arrow function
        console.log(this) //consider console same as normal on top
    }
}

obj.fun();
obj.arrow();



let newArrowFun = () => "hello world";
// return 'hello world'

console.log(newArrowFun());