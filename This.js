/* refers to the object that is currently executing the function
its value depends on how the function is called.*/

const person= {
    name: "Alan",
    greet(){
        console.log("The name is " + this.name);
    }

}
person.greet();
