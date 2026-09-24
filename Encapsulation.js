//--Encapsulation:  wrapping data in to a single unit
//  for that data will be store in private mode.

class Student
{
    #marks= 90; // here # is used to make it private
    getMarks()
    {
        return this.#marks;
    }
}
const obj =  new Student(); // function invoking
console.log(obj.getMarks()); //so here we will be able to get the value'90' bacause of we use function to invoke the value
//console.log(obj.#marks); // here on executing #marks will throw error because its decleared as Private