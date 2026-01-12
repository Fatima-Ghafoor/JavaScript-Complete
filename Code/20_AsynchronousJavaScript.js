/* ASYNCHRONOUS JAVASCRIPT */

// Asynchronous JavaScript is a way of writing code so that long-running tasks (like network requests, timers, file loading, etc) don't block the rest of the program.
// In normal (Synchronous) JavaScript, code runs line by line. If one like takes 5 seconds, everything after it must wait.

/* CALLBACK */

// A callback is a function you pass as an argument to another function, so it can be called later (often after some work finishes).

function greet(name, callback){
    console.log("Hello " + name);
    callback();
}

greet("Ayesha", function(){
    console.log("Welcome to the course!");
});

/* CALLBACK HELL */

// Callback Hell happens when you have to run many asynchronous tasks one after another, and you keep nesting callbacks inside callbacks.
// The code becomes messy, hard to read, hard to debug, and hard to maintain.

function getViewer(id, callback){
    setTimeout(() => {
        callback({id: id, name: "Ayesha"});
    }, 1000);
}

function getPosts(userId, callback){
    setTimeout(() => {
        callback([{id: 101, title: "My First Post!"}]);
    }, 1000);
}

function getComments(postId, callback){
    setTimeout(() => {
        callback(["Nice Post!", "Great Work!"])
    }, 1000);
}

getViewer(1, function(user){
    getPosts(user.id, function(posts){
        getComments(posts[0].id, function(comments){
            console.log(comments);
        });
    });
});

/* PPROMISES */

// A Promise is an object in JavaScript that represents a value that is either available now, will be available later, or fails with an error.
// Think of it as: "I promise I will give you the result later".
// A Promise is created using the 'Promise' constructor.

const getUser = new Promise((resolve, reject) => {
    let success = true;

    if(success){
        resolve("User Found!");
    }
    else{
        reject("User Not Found!");
    }
});

// Consuming a Promise: then() and catch()

// then(): runs when promise succeeds
// catch(): runs when promise fails
getUser
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });

/* 'ASYNC' & 'AWAIT' */

// 'async' and 'await' are keywords that let you write asynchronous code that looks synchronous (simple, top-to-bottom).

// 'async' makes a function always return a Promise, allowing asynchronous results and errors to be handled in a consistent way.
async function bookAuthor(){
    return "James Clear";
}
console.log(bookAuthor());

// 'await' pauses execution inside an async function until a Promise is resolved or rejected, then returns its result.
function getAllData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded!")
        }, 2000);
    });
};

async function showAllData(){
    const result = await getAllData();
    console.log(result);
}

showAllData();

/* PROMISE CHAINING */

// Promise Chaining is a technique where multiple asynchronous operations are executed one after another by returning a Promise for each .then(). Each .then() waits for the previous Promise to resolve.

console.log("Script Started!");

function stepOne(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 Done!");
            resolve(10);
        }, 1000);
    });
}

function stepTwo(value){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2 Done!");
            resolve(value * 2);
        }, 1000);
    });
}

function stepThree(value){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3 Done!");
            resolve(value + 5);
        }, 1000);
    });
}

stepOne()
    .then(result => stepTwo(result))
    .then(result => stepThree(result))
    .then(finalResult => {
        console.log("Final Result: ", finalResult);
    })
    .catch(error => {
        console.log("Error: ", error);
    });

/* ERROR HANDLING */

// try...catch in JavaScript is used to handle errors: the code inside 'try' runs normally, and if an error occurs, it jumps to the 'catch' block where you can handle it. In async functions, it works perfectly with await.

async function fetchData(){
    try{
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Failed to Fetch Data!");
            }, 1000);
        });
        console.log("Data: ", data);
    }
    catch(error){
        console.log("Error Caught: ", error);
    }
}

fetchData();