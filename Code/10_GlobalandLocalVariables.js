/* GLOBAL SCOPE */
let globalVar = "I am global variable!";  // Making the global variable.

function showVar(){
    console.log(globalVar); // Accessible here
}

showVar();
console.log(globalVar); // Accessible here too

// Variables declared outside any function or block are in the global scope.
// They can be accessed anywhere in your code.

/* LOCAL SCOPE */
function localExample(){
    let localVar = "I am local variable!"
    console.log(localVar);  // Accessible here
}

localExample();
// console.log(localVar);    // Will throw an error, since its scope is only inside that function

// Varible declared inside a function or block are in local scope.
// They can be accessed only inside that function or block.

/* FUNCTION SCOPE */
function functionScopeExample(){
    var x = 10;
    if(true){
        var y = 20; // Still part of function scope
    }
    console.log(x); // Output: 10
    console.log(y); // Output: 20
}

functionScopeExample();

// A variable has function scope if is declared inside a function using 'var'.
// Such a variable is accessible anywhere inside that function, but not outside it.
// 'var' ignores block scope (like inside 'if' or 'for') and is only limited by the function.

/* BLOCK SCOPE */
function blockScopeExample(){
    if(true){
        let a = 300;
        const b = 400;
        console.log(a); // Output: 300
        console.log(b); // Output: 400
    }
    // console.log(a);   // Error: a is not defined
    // console.log(b);   // Error: b is not defined
}

blockScopeExample();

// A variable has block scope if it is declared inside a block (curly brackets '{}') using 'let' or 'const'.
// It is accessible only inside that block, not outside, even if inside the same function.

/* SCOPE CHAIN */
/* In JavaScript, when a variable is used, the engine first looks for it in the current scope. If it's not found, it searches in the outer scope, then the next outer scope, and finally the global scope. This hierarchy of scopes is called the scope chain. */

/* SHADOWING OF VARIABLES */
/* Variable shadowing happens when a variable in a local scope has the same name as a variable in an outer scope. The local variable 'shadows' the outer one, meaning JavaScript uses the local variable inside that scope. The outer variable is still there, but temporarily inaccessible in the inner scope. It only affects the current scope. */

/* 'var', 'let' & 'const' SCOPE BEHAVIOUR */

/* 1) 'var' - Function Scoped */
// 'var' is function-scoped, meaning it is only limited to the function in which it is declared.
// It ignores block scope, so it can 'leak' out 'if', 'for', or other blocks.
// It can be re-declared within the same scope.

/* 2) 'let' - Block Scoped */
// 'let' is block-scoped (only accessible inside the {} in which it is declared).
// Cannot be re-declared in the same block, but can be updated.

/* 3) 'const' - Block Scoped + Cannot Be Reassigned */
// 'const' is also block-scoped like let.
// It must be initialized when declared.
// You cannot reassign a new value to it (but objects/arrays inside it can still change).

/* HOISTING (for variables) */

/* 1) var */
console.log(p); //undefined
var p = 10;
console.log(p);

// Hoisted and initialized with 'undefined'.
// Can be accessed before declaration (returns undefined).

/* 2) let & const */
console.log(q); // Reference error
let q = 20;

console.log(r); // Reference error
const r = 30;

// Hoisted, but not initialized.
// Accessing them before declarations causes ReferenceError.
// They are in the Temporal Dead Zone (TDZ).

/* HOISTING (for functions) */
welcome();

function welcome(){
    console.log("Welcome to the country!");
}

// Function declarations are fully hoisted.
// They are hoisted with both their name and complete function body.
// They can be called before their actual declaration line.
// Function Expressions & Arrow Functions are NOT hoisted.