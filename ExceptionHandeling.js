/*----Syntax-----
 code that made through error
 try{
    *** the code throws an error/exception, it stops the execution in the try block
 }
 catch(){
    *** handle the exception
 }

 */
/* Example -1
 let x=0;
try{
    if(x===0){
        throw new Error("Cannot divide By 0")
    }
    let result=10/x;
    console.log(result);
}
catch(error){
    console.log("An Error Occured: ",error.message);
}
// in javaScript we cannot divide a value by 0. Which results infinity
*/

try{
    sample(); // sample is a function which is not defined so expected an error
}
catch(error){
    console.log("Error :", error.message); 
}
finally{
    console.log("Execution finished");
}

