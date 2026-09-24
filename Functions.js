// A function is a block of code designed to perform a specific task

//---------Syntax----------------
 /*
    function functionname()
    {
        console.log(...)
    }
*/

//types of function: Non-parmeterized function

function greet()
{
    console.log("Good Morning");
}
greet();

//types of function: Parmeterized function
function message(yourmessage)
{
    console.log("Your message is "+ yourmessage);
}
message("Welcome");

//types of function: With return type function
let a,b;
function add(a,b)
{
    return a+b;
}
console.log(add(20,10));

//types of function: Arrow function "=>"
//---------Syntax----------------
 /*
    const functionName=()=>
    {
        console.log(...)
    }
*/

const sampleMessage=()=>
{
    console.log("Hello World");
}
sampleMessage()

//parameterized arrowFunction
let x, y;
const addition=(x,y)=>
{
    console.log(x+y);
}
addition(10,5);

//Using return type parameterized arrowFunction
let i,j;
const difference=(i,j)=>
{
    return i-j;
}
console.log(difference(5,12));

// Default parameter
// In Js default paramenter allow you to assign a default value to a function if no value is passed
function guest(name ="default guest")
{
    console.log("Hello "+ name);
}
guest(); //  if you need a value  or name to be printed  add value to the -- guest("Deepak")