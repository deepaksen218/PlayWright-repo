//if condition
let age = 15;
if(age>=18){
    console.log("eligible to vote" );
} // here we have not given the else part , since the condition is false o/p will be blank
 

//if-else condition

let candidateAge=5;
if(candidateAge>=18){
    console.log("eligible for vote");
} 
else{
    console.log("not eligible for vote");
}

// switch condition:
// to mention multiple cases we need to use Switch condition
let day=10;
switch(day){
    case 1: // here day=2, value is numeric, so case value is also should be numeric
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
     case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break; // Why we use break: to stop the execution in between if any case matches.
        default:
            console.log("invalid input");
    
}



 //------continue-------------

 for(let k=1;k<=5; k++){
    if(k===3){
        continue; // so here when value of k=3 , the execution will be get skipped 
    }
    console.log(k);
 }
