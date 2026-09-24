// An object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
// asynchronous operation: time that take to complete operation.
// example: API call
// methods ins promise: than() , catch() and finally()
// then(): executed when promise is fullfilled: handeling Success
// catch(): executed when promise is rejected: handeling Failure
// finally(): executed willbe executed irrespective of Promise fulfilment or Promise rejection

const promise= new Promise((resolve, reject)=>{
    let Success = false;
    if(Success){
        resolve("login Successful")
    }
    else{
        reject("Login failed")
    }
})
promise
.then(results=> console.log(results))
.catch(error=> console.log(error))
.finally(()=>console.log("request finished"))