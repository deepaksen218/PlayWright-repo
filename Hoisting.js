// a behaviour of moving decleration to the top of their scope, before the code execution.
// it can mainly done in 'var' variable.

console.log(a); //----< without  decleration im trying to use 'a'
var a= 10;
console.log(a);
// note here we will get undefined as output on first because we did not assign any value on step 4
// only variable assignemnt is ment in hoisting.

/* 'let' and 'const' can be also hoisted, but it will be TDZ(temperal dead zone) until their decleration is reached*/

/*console.log(b);
let b=20;
console.log(b); // o/p error will be thrown.*/

/* FUNCTION HOISTING: 
 Function can be called before it is decleared
 example: */
 greet();
 function greet()
 {
    console.log("Hello");
 }