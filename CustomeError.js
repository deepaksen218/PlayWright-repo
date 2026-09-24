class Usernotfound extends Error{
    constructor(message){
        super(message) // super keyword used to refer the parent class object
    }
}
function login(username){
    if(username!== "admin"){
        throw new Usernotfound("INVALID USER NAME")
    }
    else{
        console.log("login Successsful")
    }
}
login("admin");