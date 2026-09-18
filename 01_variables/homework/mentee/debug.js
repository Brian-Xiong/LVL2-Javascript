// ============================================================
// 🐛  VARIABLES — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment before your fix.
// Run the file to confirm each fix works.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This throws an error. What's wrong and how do you fix it?

const storeName = "TechMart";
storeName = "MegaShop";
console.log(storeName);

// What's wrong ↓
// storeName is a const and cannot be changed/edited


// Your fix ↓
// declare storeName as a let instead of a const
// EX: let storeName = "TechMart";


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This runs but the output is wrong. Find the bug.

let item1Price = 19.99;
let item2Price = 34.99;
let orderTotal = item1Price + Item2Price;
console.log("Total: $" + orderTotal);

// What's wrong ↓
// the variable name "Item2Price" is capitalized incorrectly. JavaScript is case-sensitive, so it should be "item2Price"

// Your fix ↓
// lowercase the "I" in "Item2Price" to match the variable name declared above. It should be "item2Price"
// EX: let orderTotal = item1Price + item2Price;


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code runs without throwing an error,
// but something is still wrong with it.
// Find the issue and explain why it's a problem.

var productName = "Headphones";
var productPrice = 49.99;
console.log(productName + " — $" + productPrice);

// Hint: the code works, but what keyword should you be using instead?
// Why is the current keyword considered bad practice?
// the current keyword "var" is considered bad practice because it has function scope and can lead to unexpected behavior due to hoisting. It's better to use "let" or "const" for block-scoped variables, which helps prevent bugs and makes the code more predictable.

// What's wrong ↓
// the variables are being declared with "var" instead of "let" or "const". Using "var" can lead to issues with variable scope and hoisting, which can cause unexpected behavior in larger codebases. It's better to use "let" for variables that may change and "const" for variables that should not change.

// Your fix ↓
// replace var with "const" or "let"
// EX: const productName = "Headphones";
// EX: const productPrice = 49.99;

