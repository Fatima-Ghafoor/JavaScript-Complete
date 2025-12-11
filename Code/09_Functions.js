/* FUNCTION DECLARATION & EXECUTION */
// Function declaration (creating a function)
function greet(){
    console.log("Hello, I am Fatima Ghafoor!");
}
//function: keyword
//greet: function name
//(): place for parameters
//{}: function body (the code it will run)

//Function execution (calling a function)
greet();

/* PURPOSE OF FUNCTION DECLARATION & EXECUTION */
// 1) Avoid repeating the same code again and again.
// 2) Organize code into small, manageable pieces.
// 3) Improve readability and structure.
// 4) Make logic reuseable with different inputs (using parameters).
// 5) Allow complex tasks to be broken down into steps.

/* PARAMETERS & ARGUMENTS */
//Declaring the function with parameter
function greetings(name){
    console.log("Hello, ", name);
}

//Calling the function with argument
greetings("Sara!");

//Using parameters and arguments together
function addition(num1, num2){
    console.log("Sum of both the numbers are: ", num1 + num2);
}

addition(5, 10);

/* RETURN STATEMENT */
//Creating the function with 'return' statement
function multiplication(num1, num2){
    return num1 * num2;
}

//Using the 'return' statement of the function
let result = multiplication(3, 8);
console.log("Multiplication answer: ", result);

/* DIFFERENCE BETWEEN 'RETURN' STATEMENT & 'CONSOLE.LOG()' */
// What 'return' does?
// 1) Sends a value out of the function.
// 2) Allows you to store that value in a variable.
// 3) Allows function to produce results that can be reused.
// 4) Stops the function immediately (no code runs after return).

// What 'console.log()' does?
// 1) Only displays output on the console.
// 2) You cannot store or reuse the printed value.
// 3) It does not make the function useful in calculations or further logic.

/* FUNCTION EXPRESSIONS */
const greet_exp = function(){
    console.log("Hello World!");
}

greet_exp();

//FE with another function as an argument
function showMessage(){
    console.log("Task completed!");
}

function doTask(callback){
    console.log("Working....");
    callback();
}

doTask(showMessage);    //doTask will call the function itself, as it was expecting (not the result of that function)

/* NEED OF FUNCTION EXPRESSIONS */
// 1) You can store a function in a variable.
// 2) You can pass functions as arguments (callbacks).
// 3) You can create anonymous (nameless) functions.
// 4) They are not hoisted.
// 5) They work better with modern JS (arrays, events, promises).
// 6) Foundation for Arrow Functions (AF are actually just shorter FE).

/* ARROW FUNCTIONS */
//Creating the arrow function
const subtract = (num1, num2) => {
    result = num1 - num2;
    return result;
}

//Calling the arrow function
console.log(subtract(65, 3));

/* DFAULT PARAMETERS */
function move(city = "Seoul!"){
    console.log("Welcome to ", city);
}
move();

//Default parameters are present values that a function uses when no argument is provided for that parameter.

/* ANONYMOUS FUNCTION */
function(){
    console.log("Hello!");
}

/* NEED OF ANONYMOUS FUNCTION */
// 1) It is used when passing a function as an argument.
// 2) They are great for short, one-time tasks.
// 3) Anonymous functions are helpful for short logic inside map, filter, forEach.

/* IIFE FUNCTION */
(function(){
    console.log("I run instantly!");
})();

/* NEED OF IIFE FUNCTION */
// 1) To create a private scope.
// 2) To execute code only once.
// 3) To avoid name conflicts.

/* DIFFERENCES BETWEEN REGULAR & ARROW FUNCTIONS */
// 1) Arrow functions provide a shorter, cleaner syntax compared to regular functions.
// 2) Reguler function have their own 'this', while arrow functions inherit 'this' from the surrounding scope.
// 3) Regular functions have an arguments object, arrow functions do not.
// 4) Regular functions can be used as constructors 'new', but arrow functions cannot.
// 5) Arrow functions can return values implicitly without 'return' or '{}', regular functions cannot.