// common js: older module system
// ES module system: modern JS module system

/* ------------------------COMMON JS MODULE--------------------
- math.js
__________
function add()
{
    return a+b
}

(we need to use this function add() in math to another module)

module.exports=add() // here we use 'export' 

app.js
___________
const add= require('./math.js')// here we are trying to 'import', we use 'require' keyword
console.log(add(10,20));
*/

//--------------------------------------------------------------------------------

/* ---------------ESMODULE---------------------
- math.js
__________
export function add()
{
    return a+b
}

app.js
_________
import{add} from'./math.js'
console.log(add(10,20));
*/