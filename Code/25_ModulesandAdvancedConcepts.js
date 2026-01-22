/* To see the results, make another file under the name 'math.js' and paste some code (as instructed) in that file. */

/* ES MODULES */

// ES Modules allow JavaScript code to be split into separate files and shared between them using 'export' (to expose code) and 'import' (to use that code in another file).

// Exporting (module file):

// Exporting variables and functions (paste this code in math.js)
// From Here 
export const pi = 3.14;

export function add(num1, num2){
    return num1 + num2;
}
// To Here

// Importing (module file):

// Importing from another file
import {pi, add} from "./math.js";

console.log(pi);    // 3.14
console.log(add(5, 5)); // 10

/* NAMED EXPORTS */

// Named Exports allow you to export multiple values from a module, each with its own name. You must use the same name when importing.

// Export (paste this code in math.js)
// From Here
export function divide (num1, num2){
    return num1 / num2;
}

export function power (num1, num2){
    return num1 ** num2;
}

export const E = 2.718;
// To Here

// Import
import {divide, power, E} from "./math.js";

console.log(divide(10, 2)); // 5
console.log(power(2, 3));   // 8
console.log(E); // 2.718

/* DEFAULT EXPORTS */

// Default Exports allow a module to export a single main value. When importing, you can give it any name you like.

// Export (paste this code in math.js)
// From Here
export default function multiply(num1, num2){
    return num1 * num2;
}
// To Here

// Import
import multiplyFunction from "./math.js";

console.log(multiplyFunction(2, 3));    // 6

/* CLOSURES */

// Closure is a function that remembers and can access variables from its outer function, even after the outer function has finished executing.

function createCounter(){
    let count = 0;  // this is 'remembered'

    return function(){  // this is the "key"
        count++;
        return count;
    };
}

//  Example: Closures
const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Example: Closures with Parameters
function multiplyBy(factor){
    return function (num){
        return num * factor;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

/* HIGHER ORDER FUNCTIONS */

// Higher-Order Function is a function that takes another function as an argument or returns a function.

function greetUser(name){
    return "Hello " + name;
}

function processUser(name, callback){
    return callback(name);
}

console.log(processUser("Sara", greetUser));
// Output: Hello Sara

/* DEBOUNCING */

// Debouncing ensures a function runs only after a certain time has passed since the last event occured.

function debounce (func, delay){
    let timeoutId;

    return function(){
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func();
        }, delay);
    };
}

// Function to be debounced
function sayHello(){
    console.log("Hello after Debounce!");
}

// Create debounced version
const debouncedHello = debounce(sayHello, 1000);

// Call it multiple times
debouncedHello();
debouncedHello();

// Separate the calls in time
setTimeout(() => {
    debouncedHello();
}, 1500);   // greater than debounce delay (1000ms)

/* THROTTLING */

// Throttling ensures a function executes at most once within a specified time interval, no matter how many times it is triggered.

// Basic Throttle Function
function throttle (func, delay){
    let lastCall = 0;

    return function (){
        const now = Date.now();

        if (now - lastCall >= delay){
            lastCall = now;
            func();
        }
    };
}

// Using Throttle
function sayHi(){
    console.log("Hello from Throttle!");
}

const throttledHi = throttle(sayHi, 1000);

// Rapid Calls
throttledHi();
throttledHi();
throttledHi();