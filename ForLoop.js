// loops used in JS is forloop. while loop and do while loop.
// forloop is used when we know the number of iterations.
// while loop is used when we don't know the number of iterations.
// do while loop is used when we want to execute the loop at least once.

//---FOR LOOP--- SYNTAX
    /* for(initialization; condition; increment/decrement){
            // code to be executed
 
     }  */

 //-----------EXAMPLE---------------//

    /* for (let i =1; i<=10; i++)
     {
        console.log("Hello, World ! "); // This line prints "Hello, World!" to the console 10 times.
        
     }

 // printing 1 to 10 numbers using for loop

     for (let i = 1; i <= 10; i++) {
        console.log(i);
     }

 // printing number from 5 to 10 using loop
     for (let j=5; j<=10; j++){
        console.log(j); // This line prints numbers from 5 to 10 to the console.
    }*/

 // printing even numbers from 1 to 10 using for loop

    /*for (let i= 2; i<=10; i=i+2){
        console.log(i); // This line prints even numbers from 2 to 10 to the console.
    }*/


 // printing odd numbers from 1 to 10 using for loop

   /* for (let i=1; i<=10; i=i+2){
        console.log(i); // This line prints odd numbers from 1 to 10 to the console.
    }*/

 // printing 30 to 40 even numbers using for loop

   /* for (let i =30; i<=40; i=i+2){
        console.log(i); // This line prints even numbers from 30 to 40 to the console.
     }*/

 // sum of first 10  numbers using for loop

        let sum =0;
        for (let i=1; i<=10; i++){
            sum=sum+i;
        }
         console.log(sum); // This line prints the sum of the first 10 natural numbers to the console.
    
 //print reverse of numbers from 1 to 10 using for loop

        for (let i =10; i>=1; i--){
            console.log(i)
        }

    
