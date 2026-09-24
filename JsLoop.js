// here we discuss Forloop, While loop, For-IN loop, For-OF loop

// loop or iteration: execution repeatedly

//--------------FOR-LOOP----------------------

        //--------SYNTAX------
/*
        for(initialization; condition; increment(++) OR decrement(--))
        {
            console.log(...);
        }
*/

for(let i =1; i<=5; i++) // we can intialize i value within the for loop or initialize outside like : let i =1, and call for (i=1)
    { 
        console.log(i);
    }

//--------------While-LOOP----------------------
let x=10;
while (x<=15)
{
    console.log(x)
    x++
}

// for..of loop: commonly used in Arrey, String, Map, Set
//Or iteration done for the 'collection of Objects'
       //--------SYNTAX------
/*
        for(let varaible of iterable)
        {
            console.log(...);
        }
*/

// for..in loop: iteration done for the 'Key in Objects'
       //--------SYNTAX------
    /*
        for(let key in object)
        {
            console.log(...);
        }
    */

    let employee ={
        name: "Alan",
        age: 20,
        role: "QA"
        // name, age and role are mentioned as KEY in the syntax and  object is employee
    }
    for (let key in employee){
        console.log(key);
    }

