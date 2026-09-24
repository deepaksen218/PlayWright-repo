class ElectricCar
{
    eVCar(){
        console.log("eV Cars produce less Air Pollution");
    }
}
class FuelCar extends ElectricCar
{
    fuelEngines(){
        console.log("Fuel Cars produce high Air Pollution ")
    }
}
const engine= new FuelCar();
engine.eVCar();
engine.fuelEngines();
//----------------------------------------

class Car{
    #speed=100;
        showSpeed(){
            return this.#speed;
        }
    }
const car = new Car;
console.log(car.showSpeed());
//-------------------------------------

class Machines{
    wheel(){
        console.log("This Machine is a CAR with 4 wheels");
    }
}
class TwoWheeler extends Machines{
    wheel(){
        console.log("This Machine is a Bike with 2 wheels");
    }
}
const vehicle = new TwoWheeler();
vehicle.wheel();

const vehicle1 = new Machines();
vehicle1.wheel();
//-----------------------------------

class Mobile{
    android(){
        console.log("User is using Android Phone")
    }
}
const phone = new Mobile()
phone.android();