// ============================================================
// 🐛  CONDITIONALS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log "Pass" when score is 70, but it always
// logs "Pass" even when score is 30. Why?

let score = 30;
const passing = 60;

if (score = passing) {
  console.log("Pass ✅");
} else {
  console.log("Fail ❌");
}

// What's wrong ↓
// the conditional on line 18 has only one equal sign: if (score = passing).  
//  But we want to check if score is greater than or equal to passing.

// Your fix ↓
 // line 18  should be: if (score >= passing) 


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// A theme park ride requires riders to be EITHER
// at least 140cm tall OR accompanied by an adult.
// But the code is turning away people it shouldn't.

const height        = 135;
const withAdult     = true;
const minHeight     = 140;

if (height >= minHeight && withAdult) {
  console.log("🎢 Enjoy the ride!");
} else {
  console.log("🚫 Sorry, you cannot ride.");
}

// What's wrong ↓
// on line 43, the conditional should be an OR (aka ||) not and not an AND (aka &&)

// Your fix ↓
// line 43 should be if (height >= minHeight || withAdult)


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This shipping calculator has two bugs.
// One causes the wrong tier to log.
// One is a style issue from a previous lesson.
// Find both.

var orderTotal = 85;

if (orderTotal >= 50) {
  console.log("🚚 Standard shipping: $5");
}
if (orderTotal >= 100) {
  console.log("🚀 Free express shipping!");
}
if (orderTotal < 50) {
  console.log("📦 Economy shipping: $9.99");
}

// Bug 1 ↓
// line 63, the variable should be declared with const or let, NOT var.  
// Var is unsafe, declares the variable as global (potential issues if you try to make another variable with the same name), 
// and allows accidental declarations of the exact same variable name twice within the same scope. 

// Bug 2 ↓
// the if statements should be if else statements.  Therefore there is only one output, rather than two outputs

// Your fix ↓
