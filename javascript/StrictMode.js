'use strict' 
// strict mode
// check code strictly hence variable give an arrow.

b = 10; 
console.log(b); 
//error -> b is not defined
// without hoist -> output, 10

function run(a, a){ // without strict it work
    console.log(a+a);
}
run(8, 2); // duplicate para not allowed
