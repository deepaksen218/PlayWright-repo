// Abstraction: implemention details will be hidden
/* for example:  a login page: */

class ATM
{
    withdraw(amount) // here (amount) to get dynamic value from the obj.withdraw.
    {
        console.log(`${amount}  withdrawn `);

        // OR console.log(`${amount} `+ "withdrawn"); // $ 
    }
}
const obj = new ATM();
obj.withdraw(20);
