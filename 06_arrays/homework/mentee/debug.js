// ============================================================
// 🐛  ARRAYS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the middle element ("C") of the array.
// Instead it logs undefined. What's wrong?

const letters = ["A", "B", "C", "D", "E"];
const middleIndex = letters.length / 2;
console.log(letters[middleIndex]);

// What's wrong ↓
// letters.length returns 2.5 however array index must be whole numbers

// Your fix ↓
// use Math.floor() to get a round number
// use line 16 should be:
// const middleIndex = Math.floor(letters.length / 2);



// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should build a total of all prices.
// It logs NaN instead of a number. What's wrong?

const prices = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i <= prices.length; i++) {
  total += prices[i];
}

console.log("Total: $" + total);

// What's wrong ↓
// in the for loop i <= prices.length causes the loop to run an extra time and prices[i] will be out of the scope of the array

// Your fix ↓
// use i < prices.length instead of i <= prices.length

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to find the highest score in the array
// and log the winner's name. It always logs the wrong winner.
// There are TWO bugs. Find both.

const names  = ["Alice", "Bob", "Carol", "Dave"];
const scores = [82, 91, 78, 95];

let topIndex  = 1;
let topScore  = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > topScore) {
    topScore = scores[i];
    topIndex = i;
  }
}

console.log("Winner: " + names[topIndex] + " with " + topScore);

// Bug 1 ↓
// Top index should start at 0 instead of 1, because arrays start at index 0

// Bug 2 ↓
// topScore should start at scores[0] to ensure that we have a number to start with instead of starting at zero

// Your fix ↓
// line 60 and 61 should be:
// let topIndex = 0;
// let topScore = score[0];
