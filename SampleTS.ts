let age:number= 28;
//age="TwentyEight"
console.log(age);     // type cannot be changed, but reassignment is possible

///////////------------------

// note for 'const' ressignment is not possible
/*const age1:number= 28;
age1= 40;
console.log(age1); // here output is error. */

//-----------------------

function greet():void{
    console.log("hello")
}
greet()

//-------Based on paramenter-------------

function greet1(a:number,b: number):number{
    return a+b
}
console.log(greet1(10,5))

//-------------Anonimous function---------------

let multiply = function(x:number, y:number):number{
    return x*y
}
console.log("Product:  " + multiply(2,4))