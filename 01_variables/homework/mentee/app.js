// ============================================================
// 🏠  VARIABLES — HOMEWORK
// ============================================================
// Complete each task using only what you learned in class:
//   - const and let
//   - declaring, assigning, reassigning
//   - console.log()
//   - string + number combination with +
//
// No DOM. No HTML edits. Open DevTools to see your output.
// ============================================================

// ----------------------------------------------------------
// TASK 1 — Your personal profile
// ----------------------------------------------------------
// Declare the following using the correct keyword (const or let).
// Add a comment next to each one explaining WHY you chose that keyword.
//
//   fullName    → your full name as a string
//   age         → your age as a number
//   city        → the city you live in
//   isStudent   → true or false
//
// Log all four to the console.

const fullName = "Brian Xiong"; // fullName is a constant because it will not change
let age = 30; // age is a let because it can change over time
let city = "San Francisco"; // city is a let because it can change if I move
let isStudent = true; // isStudent is a let because once I finish this course, I will no longer be a student

console.log(fullName);
console.log(age);
console.log(city);
console.log(isStudent);

// ----------------------------------------------------------
// TASK 2 — Update what can change
// ----------------------------------------------------------
// Reassign city to a different city.
// Reassign isStudent to the opposite value.
// Log both after reassigning.
//
// Then try to reassign fullName.
// Read the error, then comment that line out.
city = "Los Angeles";
isStudent = false;

console.log(city);
console.log(isStudent);

// fullName = "New Name"; // This line will throw an error because fullName is a const and cannot be reassigned.

// ----------------------------------------------------------
// TASK 3 — Undefined in the wild
// ----------------------------------------------------------
// Declare a let called favoriteMovie — do NOT assign a value.
// Log it. Write what you see as a comment.
//
// Now assign it a movie title.
// Log it again.

let favoriteMovie;
console.log(favoriteMovie); // undefined
favoriteMovie = "The Matrix";
console.log(favoriteMovie); // "The Matrix"

// ----------------------------------------------------------
// TASK 4 — Build a product listing
// ----------------------------------------------------------
// You're building a small online store.
// Declare const variables for:
//
//   productName  → a made-up product name
//   productBrand → the brand name
//   productPrice → a price as a number
//   inStock      → true
//
// Log each variable on its own line.
// Then log: productName + " by " + productBrand + " — $" + productPrice

const productName = "Xbox";
const productBrand = "Microsoft";
const productPrice = 300;
let inStock = true;

console.log(productName);
console.log(productBrand);
console.log(productPrice);
console.log(inStock);
console.log(productName + " by " + productBrand + " — $" + productPrice);


// ----------------------------------------------------------
// TASK 5 — Stock status update
// ----------------------------------------------------------
// Reassign inStock to false.
// Log: "In stock: " + inStock
//
// Try to reassign productName.
// Read the error and comment the line out.
// Why did this fail but inStock worked?
// Write your answer as a comment.

inStock = false;
console.log("In stock: " + inStock);

// productName = "PlayStation"; // This line will throw an error because productName is a const and cannot be reassigned. inStock worked because it was declared with let, which allows reassignment.

// ----------------------------------------------------------
// TASK 6 — Fix the bad names
// ----------------------------------------------------------
// The variable names below are all invalid or poor practice.
// Rewrite each one correctly, declare it with any value, and log it.
//
//   2ndPlayer     → fix it
//   my score      → fix it
//   X             → rename to something descriptive, then declare it
//   GaMeLeVeL     → fix the casing

const secondPlayer = "Alice"; // Fixed to start with a letter instead of a number
const myScore = 100; // Fixed to remove the and be camel case
const nameX = "Bob"; // Renamed to something descriptive
const gameLevel = 1; // Fixed to be camel case


// ----------------------------------------------------------
// TASK 7 — Two-step declaration
// ----------------------------------------------------------
// Declare a let called highScore — do NOT assign a value.
// Log it.
//
// Assign highScore the value 500.
// Log it.
//
// Reassign highScore to 750.
// Log it.
//
// You should see three console lines: undefined → 500 → 750

let highScore;
console.log(highScore); // highScore is undefined

highScore = 500;
console.log(highScore); // highScore is now set to 500

highScore = 750;
console.log(highScore); // highScore is now set to 750

// ----------------------------------------------------------
// TASK 8 — Connect the variables
// ----------------------------------------------------------
// Declare these consts:
//   appName    → "TaskMaster"
//   version    → 3
//   authorName → your name
//
// Log: appName + " v" + version + " — built by " + authorName
// Expected format: "TaskMaster v3 — built by [your name]"



// ----------------------------------------------------------
// ⭐ STRETCH GOAL
// ----------------------------------------------------------
// Declare a const called startYear with the value 2020.
// Declare a const called currentYear with the value 2025.
// Declare a let called yearsRunning = currentYear - startYear.
//
// Log: appName + " has been running for " + yearsRunning + " years."
//
// Then reassign currentYear... wait, can you? Why not?
// Write the answer as a comment.
// What keyword would you need if currentYear could change?
