/* TRY...CATCH */

// try...catch is used to handle runtime errors in JavaScript by allowing the program to attempt risky code inside 'try' and catch the error in 'catch' without crashing the entire application.

try{
    let result = JSON.parse("{name: 'Umer'}");  // invalid JSON
    console.log(result.name);
}
catch(error){
    console.log("Something went wrong: ", error.message);
}

/* FINALLY */

// The 'finally' block in JavaScript is used after 'try...catch' to execute code regardless of whether an error occurred or not. It's often used for cleanup actions.

try{
    let number = 10;
    console.log(number / 0);    // no real error, but let's say risky operation
}
catch(error){
    console.log("Error occured: ", error.message);
}
finally{
    console.log("This runs no matter what!");
}