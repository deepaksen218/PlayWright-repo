/* -----SYNTAX-----

class CLASSNAME 
    {
        
    }

*/


let brand, color;
class Car{
    constructor(brand, color)
    {
        this.brand= brand;
        this.color= color;
        console.log(brand, color);
    }
    
}
const car1=new Car("Honda","Jazz") // constructor invoke by object(car1, car2)
const car2= new Car("BMW","540")