// ============================================================
// 🐛  OPERATORS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should calculate a 15% tip but the result is wrong.

const billAmount = 80;
const tipPercent = 15;
const tipAmount  = billAmount % tipPercent;
console.log("Tip: $" + tipAmount);

// What's wrong ↓
// billAmount should be multiplied by tipPercent and then divided by 100 to calculate the tip amount, not using the modulus operator.

// Your fix ↓
// const tipAmount = (billAmount * tipPercent) / 100;
// console.log("Tip: $" + tipAmount);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to track a countdown timer.
// Something is wrong with how the variable is declared.

const countdown = 10;
countdown -= 1;
countdown -= 1;
countdown -= 1;
console.log("Countdown: " + countdown);

// What's wrong ↓
// the variable coutdown is declared with a const, which means it cannot be reassigned. It should be declared with let instead.

// Your fix ↓
// let countdown = 10;

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to check if two usernames match.
// It always logs true even when they shouldn't match.
// There are also two style issues (not errors, but bad practice).
// Find the logic bug AND the two style issues.

var username1 = "gamer99";
var username2 = "Gamer99";
console.log("Names match: " + (username1 == username2));

// Logic bug ↓
// The comparison is case-sensitive, so "gamer99" and "Gamer99" are not equal. To fix this, we can convert both usernames to the same case (e.g., lowercase) before comparing.

// Style issue 1 ↓
// both variables are declared with `var`, which is outdated. It's better to use `let` or `const` for variable declarations to avoid issues with scope and hoisting.
// const username1 = "gamer99";
// const username2 = "Gamer99";

// Style issue 2 ↓
// The console.log statement is using string concatenation with the + operator. It's more modern and readable to use template literals for string interpolation.

// Your fix ↓
let username1 = "gamer99";
let username2 = "Gamer99";
console.log("Names match: " + (username1 == username2));
