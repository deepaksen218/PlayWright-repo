// it is a function that is passed as an argument to another function and 
// and is executed later, usually after a task is COMPLETED

function greet(name, age){
    console.log("Hello, " + name + " " + age)
}


function processUser(callback){
    let user= "John";
    let userage= 25;
    callback(user, userage) //callback(John)
}
processUser(greet) // processUser(greet) 

///*advantage: reusability of Code, Flexiable, Better Organisation*/

// Callback Hell:
/* it occurs when multiple call backs are nested inside each other, 
making the code difficult to read understand and maintain
this is sometimes called 'PYRAMID of DOOM', because the code seems shifiting to right*/
