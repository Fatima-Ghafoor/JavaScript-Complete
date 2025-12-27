/* CREATE ARRAYS */

// 1) Using Array Literals:
let arrayFruits = ["Banana", "Watermelon", "Mango", "Grapes", "Orange"];
console.log(arrayFruits);

// 2) Using Array Constructor:
let arrayVegetables = ["Carrot", "Capsicum", "Onion", "Garlic", "Beetroot"];
console.log(arrayVegetables);

/* INDEXING */

// Indexing is the way we access or locate elements inside an array using a number called an index. Array Index starts from 0.

console.log(arrayFruits[1]);
console.log(arrayFruits[2]);
console.log(arrayVegetables[0]);
console.log(arrayVegetables[3]);

/* UPDATE VALUES */

console.log("Array Before: ", arrayFruits);
arrayFruits[1] = "Cherry";
console.log("Array After: ", arrayFruits);

/* ARRAY METHODS */

// 1) push(): Add elements to the end of the array.
console.log("Array Before push(): ", arrayFruits);
arrayFruits.push("Apple");
console.log("Array After push(): ", arrayFruits);

// 2) pop(): Remove the last element from the array.
console.log("Array Before pop(): ", arrayFruits);
arrayFruits.pop();
console.log("Array After pop(): ", arrayFruits);

// 3) shift(): Removes the first element from the array.
console.log("Array Before shift(): ", arrayFruits);
arrayFruits.shift();
console.log("Array After shift(): ", arrayFruits);

// 4) unshift(): Add elements to the beginning of the array.
console.log("Array Before unshift(): ", arrayFruits);
arrayFruits.unshift("Peach");
console.log("Array After unshift(): ", arrayFruits);

// 5) indexOf(): Find the index of an element.
var fruitIndex = arrayFruits.indexOf("Grapes");
console.log("Index of Grapes is: ", fruitIndex);

// 6) includes(): Check if an element exists in the array.
var fruitCheck = arrayFruits.includes("Peach");
console.log("Result: ", fruitCheck);

// 7) slice(): Extracts a portion of the array (does not modify original).
console.log("Original Array is: ", arrayFruits);
var arrayFruitsSlice = arrayFruits.slice(1, 3);
console.log("Array Slice is: ", arrayFruitsSlice);

// 8) splice(): Add or remove the elements in the array.
console.log("Array Before splice(): ", arrayFruits);
arrayFruits.splice(1, 1, "Plums");
console.log("Array After splice(): ", arrayFruits);

// 9) join(): Convert the array to a string.
console.log("Fruits Array: ", arrayFruits);
var sampleArray = arrayFruits.join(", ");
console.log("Fruits Array as string: ", sampleArray);

// 10) sort(): Sort the array alphabetically or numerically.
console.log("Array Before sort(): ", arrayFruits);
var sortedArray = arrayFruits.sort();
console.log("Array After sort(): ", sortedArray);

/* LOOPS WITH ARRAY */

// 1) For Loop: Used when you need full control over index, direction, or conditions.
let arrayColours = ["Red", "Black", "Blue", "Purple", "Pink"];
for(let  i = 0; i < arrayColours.length; i++){
    console.log(arrayColours[i]);
}

// 2) For...of Loop: Used to iterate over values only, not indexes.
for(let colourNames of arrayColours){
    console.log(arrayColours);
}

// 3) forEach: A built-in array method that runs a callback for every item.
arrayColours.forEach(function(colourNames, index){
    console.log(index, colourNames);
});