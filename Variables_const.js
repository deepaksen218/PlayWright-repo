const a = 25;
const b = 30;
console.log(a);
console.log(b);

/*
a = 50; // This line will throw an error because 'a' is a constant and cannot be reassigned.
b = 60; // This line will also throw an error because 'b' is a constant and cannot be reassigned.
console.log(a);// -- NOT POSSIBLE TO REASSIGN THE VALUE OF A CONSTANT VARIABLE. IT WILL THROW AN ERROR.
console.log(b);// -- NOT POSSIBLE TO REASSIGN THE VALUE OF A CONSTANT VARIABLE. IT WILL THROW AN ERROR.
*/

// Chekcing redeclaration of constant variable is possible or not

/*const a = 100; // Here we are declaring a constant variable 'c' and assigning it the value 100.
console.log(a); // This line prints the value of 'c' to the console, which is 100. */
// ON THE ABOVE NOT POSSIBLE TO REDECLARE THE VALUE OF A CONSTANT VARIABLE. IT WILL THROW AN ERROR.

const name = "sen"; // Here we are declaring a constant variable 'name' and assigning it the string value "sen".
// now I need to concatenate the value of name with some other string
console.log("My Name is " + name); // This line prints the value of 'name' to the console, which is "sen".

// Now checking type of constant variable
console.log("type of name is : " + typeof name); // This line prints the type of the variable 'name' to the console, which is "string".
console.log("type of a is : " + typeof a); // This line prints the type of the variable 'a' to the console, which is "number".
console.log("type of b is : " + typeof b); // This line prints the type of the variable 'b' to the console, which is "number".