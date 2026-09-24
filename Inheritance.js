class Animal
{
    eat( )
    {
        console.log("Animal is eating");
    }
}

class Dog extends Animal //here extends used to get the property of animal in the DOG class
{
    bark()
    {
        console.log("Dog is barking");
    }
}
const obj1 = new Dog()
obj1.eat();
obj1.bark();