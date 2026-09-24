
//Addition of two numbers
let a = 10, b = 20, sum = a+b;
//let b = 20;
//let sum = a + b;
console.log("Sum of a + b is " +sum);

//Subtraction of two numbers
let c = 30;
let d = 15;
let difference = c - d;
console.log("Difference of c - d is " +difference);

//Multiplication of two numbers
let e = 5;
let f = 6;
let product = e * f;
console.log("Product of e * f is " +product); 

//Division of two numbers
let g = 50;
let h = 10;
let quotient = g / h;
console.log("Quotient of g / h is " +quotient);

//Modlus of two numbers
let num1 = 20;
let num2  = 20;
let modlus = num1 % num2;
console.log("Modlus of num1 and num2 is " + modlus);

/* Comparison Operator:
    == : will only consider the value not type; ---->5=="5" : o/p : true
    === : it will conside the type and value; -----> 5==="5": o/p : false
    != : will only consider the value not type;
    !== it will conside the type and value; 

    && (logical AND) for this both conditions should match  true, to get the o/p TRUE
    || (logical OR)for this anyone conditions should match  true, to get the o/p TRUE
    !  (logical NOT) it reverses the boolean Value
    ? Ternary Operator:
        it is ment as 'if else' operator*/ 
        let age = 10;
        let result = age >= 18? "adult": "minor";
        console.log(result);