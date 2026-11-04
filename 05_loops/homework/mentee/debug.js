// ============================================================
// 🐛  LOOPS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This loop should log numbers 1 through 10.
// It only logs 1 through 9. What's wrong?

for (let i = 1; i < 10; i++) {
  console.log(i);
}

// What's wrong ↓
// inside the for loop, i < 10 is excluding 10.  it should be i <= 10 to include 10 in the loop 

// Your fix ↓
// line 15 should be;
// for (let i = 1; i <= 10; i++) {


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should calculate the sum of 1 through 5 (answer: 15).
// It always logs 0. What's wrong?

for (let i = 1; i <= 5; i++) {
  let total = 0;
  total += i;
}
console.log("Sum: " + total);

// What's wrong ↓
// the variable "total" is being declared inside the for loop and only exsists inside of the for loop.  
// It should be declared outside of the for loop so that it can be accessed after the loop is finished.

// Your fix ↓
// Declare total outside of the for loop:
// let total = 0;
// for (let i = 1; i <= 5; i++) {
// total += i;
// }
// console.log("Sum: " + total);
  
// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This loop should log all ODD numbers from 1 to 10,
// then log "Done!" at the end.
// Instead it logs nothing and skips straight to "Done!".
// There are TWO bugs. Find both.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}
console.log("Done!");

// Bug 1 ↓

// Bug 2 ↓

// Your fix ↓
