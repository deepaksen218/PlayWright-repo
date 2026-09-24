class Playwright
{
    learn()
    {
        console.log("Learning PlayWright");
    }
}
class JavaScript extends Playwright
{
    learn()
    {
        console.log("Learning JavaScript");
    }
}
const obj = new JavaScript();
obj.learn();

const obj1 = new Playwright();
obj1.learn();
// NOTE: here same function 'learn' is used with different Actions, which is called Polymorphism