let j = 1;
let k = 1;
const fruits = ["Watermelon", "Banana", "Orange", "Mango", "Apple", "Grapes"];
const student = {
    fullName: "Sara Ahmed",
    age: 20,
    city: "Lima"
};

/* FOR LOOP */
// Repeats a block of code for a known number of times (based on a counter).
for(let i = 1; i <= 5; i++){
    console.log("Number: ", i);
}

/* WHILE LOOP */
// Repeats a block of code while a condition is true (condition checked first).
while(j <= 5){
    console.log("Count: ", j);
    j++;
}

/* DO...WHILE LOOP */
// Repeats a block of code at least once, then continues while a condition is true.
do{
    console.log("Value: ", k);
    k++;
}
while(k <= 5);

/* FOR...OF LOOP */
// Iterates over the 'values' of an iterable (arrays, string, sets etc).
for(const fruit of fruits){
    console.log(fruit);
}

/* FOR...IN LOOP */
// Iterates over the 'key/properties' of an object.
for(const key in student){
    console.log(key, ":", student[key]);
}