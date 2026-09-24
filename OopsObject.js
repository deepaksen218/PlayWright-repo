// Object Creation:  Using Object Literal
const person= { // person is the object
    name:"Alan", // properties of the person are name, age
    age: 25,
    greet() // here greet is the function
    {
        console.log("Good Morning")
    }
}
console.log(person.name);
person.greet(); // invoke function

//Using New Object
const employee= new Object(); // predefined Constuctor
employee.name= "John";
employee.salary=1000;
console.log(employee);

// Json Object Creation:
/* Atext formante used to store and Exchange Data
 it consist of 'Key value pair'---> important
 String and Key values should be in double quotes " " 
 
 NOTE: No functions are not allowed in JSON. It only allowed Data */
 
 const student ={
    "name": "Tony",
    "age": 22,
    "department": "EC"
 }
 console.log(student);