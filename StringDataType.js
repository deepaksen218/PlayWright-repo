let a = "Hello";
let b = 'Hello';
console.log(a);
console.log(b);

// to  change the value to Uppercase
let c = "HelloWorld";
let d = 'HELLOWORLD';
console.log(c.toUpperCase());
console.log(d.toLowerCase());

let str = "javaScript";
console.log(str.length);

let e = "Hello  ";
console.log(e.trim()); // This line prints the string "Hello" to the console, the value of variable 'e' after removing any leading or trailing whitespace.

let f = "Good Morning";
console.log(f.startsWith("Good")); // This line prints true to the console, indicating that the string stored in variable 'f' starts with the substring "Good"
console.log(f.startsWith("go")); // This line prints true to the console, indicating that the string stored in variable 'f' ends with the substring "Morning"

let g = "PlayWright";
console.log(g.includes("Wright")); // This line prints true to the console, indicating that the string stored in variable 'g' contains the substring "Wright".
console.log(g.includes("CAT")); // This line prints false to the console, indicating that the string stored in variable 'g' does not contain the substring "CAT".