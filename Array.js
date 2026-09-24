// can able to store multiple values of same type

//---------Array literal Format------------
let course = ["MBA", "BBA", "B.com","B.tech"]
console.log(course);

//---------Empty Array Format------------
// initially create an array and add values to it
let numbers = [] // array creation
numbers[0]=10; // 0 is the index value, array is based on Index based
numbers[1]=20;
numbers[2]=30;
console.log(numbers); 

//---------Array Constructor Format------------
let colors= new Array("Black", "Blue", "Yellow");
console.log(colors);

// Creating Array based on the specific Size
let myArray = new Array(5); // here we created with size 5 for the array
console.log(myArray);
console.log(myArray.length);

// Creating Array using Array of Function
let num= Array.of(10,20,30);
console.log(num);

// inserting elements to an Array using PUSH function
let myNum=[];
myNum.push(15);
myNum.push(16);
myNum.push(17);
console.log(myNum);

// iteration Using For-Loop
let fruits=["Apple","Orange", "Banana"];
for(let i=0;i<=2;i++) // for(let i=0;i<3;i++) OR for(let i=0;i<fruits.length;i++)
    {
        console.log(fruits[i]);
    }

// Using for-Of
 let fruits1=["Apple","Orange", "Banana"];
 for(let fruit of fruits1)
    {
        console.log(fruit)
    }

// Using for-each
let fruits2=["Apple","Orange", "Banana"];
fruits2.forEach(function(fruit){
    console.log(fruit);
})

// for-in can be used in array
    for(let index in fruits1){
        console.log(index,fruits1[index]);
    }

//MAP, using map, creating  a new array based on the exsisting array by transforming the values
    let numbers1= [1,2,3]
    let double= numbers1.map(num=>num*2) // num is pre-defined word
    console.log(double);

// Filter: 
let num1=[10,20,30,40]
//console.log(num1.filter(num=>num>15)); // filter will not modify the array. it will just to show
let newArray= num1.filter(num=>num>15); // here we store the filterd data into a new ARRAY
//NOTE: if their is no matching value, it will return and EMPTY array
console.log(newArray);
console.log(num1);

// Find:
console.log(num1.find(num=>num>15)); // NOTE: here if their is no matching value, it will return an UNDEFINED

// POP: to remove the last element, so array will get updated.
let languages=["Java","Python","Cobol","php"]
languages.pop();
console.log(languages);

//Unshift: to add elements to the begning of an Array
languages.unshift("C#", "php"); // we add multiple values
console.log(languages);

//Shift: to remove the first element from the array
languages.shift();
console.log(languages);

//includes:
console.log(languages.includes("Python")); // checking the value is available in the array: returns True
console.log(languages.includes("C")); // returns FALSE

//indexOf: to return the index of an element
console.log(languages.indexOf("Cobol"));

//reverse:
console.log(languages); // orginal value
languages.reverse();
console.log(languages); // reversed value
