/* STACK */

// Stack is a linear data structure that follows the principle LIFO - Land In, First Out. The last element added to the stack is the first one to be removed.

// Key Operations:
// push(): Add an element to the top.
// pop(): Remove the top element.
// peek()/top(): View the top element without removing it.
// isEmpty(): Check if the stack is empty.

let stack = [];

// Add values
stack.push("Banana");
stack.push("Mango");
stack.push("Orange");

// Print the stack
console.log(stack);

// Remove a value
stack.pop();

// Print the stack
console.log(stack);

/* QUEUE */

// Queue is a linear data structure that follows the principle FIFO - First In, First Out. The first element added to the queue is the first one to be removed.

// Key Operations:
// push(): Add an element to the end.
// shift(): Remove an element from the front.
// front(): View the first element.
// isEmpty(): Check if the queue is empty.

let queue = [];

// Add values
queue.push("Bangladesh");
queue.push("Japan");
queue.push("Korea");
queue.push("Thailand");

// Print the queue
console.log(queue);

// Remove a value
queue.shift();

// Print the queue
console.log(queue);

/* LINKED LIST */

// Linked List is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.
// Unlike arrays, elements are not stored in contiguous memory locations.

class Song{
  constructor(name){
    this.name = name;
    this.next = null;
  }
}

// Create Songs
let song1 = new Song("Song A");
let song2 = new Song("Song B");
let song3 = new Song("Song C");

// Link Songs
song1.next = song2;
song2.next = song3;

// Start Playlist
let currentSong = song1;

while (currentSong !== null){
  console.log(currentSong.name);
  currentSong = currentSong.next;
}

/* HASHMAP (USING OBJECTS) */

// HashMap is a data structure that stores key-value paris.

// Key: unique identifier.
// Value: the data associated with that key.

// Creating a HashMap (using object)
let studentGrades = {
  "Alice": 85,
  "Bob": 92,
  "Charlie": 78
};

// Print the hashmap
console.log(studentGrades);

// Access a value
console.log(studentGrades["Bob"]);

// Add a new key-value pair
studentGrades["David"] = 88;

// Update a value
studentGrades["Alice"] = 90;

// Delete a key-value pair
delete studentGrades["Charlie"];

console.log(studentGrades);

/* SETS & MAPS */

// Set: It is a built-in JavaScript data structure that stores a collection of unique values, where each value can be of any data type, and the insertion order of values is preserved.

// Key Operations:
// add(): Add a value to the set. If it already exists, it does nothing (no duplicates).
// delete(): Removes a specific value from the set.
// has(): Returns true if the value exists in the set, otherwise false.
// clear(): Removes all values from the set.
// size: Returns the number of elements in the set (property, not method).
// forEach(callback): Executes a function once for each value in the set.
// values()/keys(): Returns an iterator for all values in the set (keys() is identical to values()).
// entries(): Returns an iterator with [value, value] pairs (for compatibility with Map).

let numbers = new Set();

// Add values
numbers.add(10);
numbers.add(20);
numbers.add(30);

// Print the set
console.log(numbers);

// Check if value exists
console.log(numbers.has(20));

// Remove a value
numbers.delete(10);

// Iterate the set
for (let num of numbers){
  console.log(num);
}

// Map: It is a built-in JavaScript data structure that stores data as key-value pairs, where both keys and values can be of any data type, and the insertion order of keys is preserved.

let employeeSalary = new Map();

// Add key-value pairs
employeeSalary.set("Faizan", 90000);
employeeSalary.set("Amir", 70000);
employeeSalary.set("Sameer", 50000)

// Print the map
console.log(employeeSalary);

// Keys can be objects
let employee = { id: 1 };
employeeSalary.set(employee, "Charlie");

// Get values
console.log(employeeSalary.get("Amir"));

// Check if key exists
console.log(employeeSalary.has("Bob"));

// Delete key
employeeSalary.delete("Faizan");

// Iterate the map
for (let [key, value] of employeeSalary){
  console.log(key, value);
}