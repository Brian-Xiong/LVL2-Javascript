// ============================================================
// 🐛  DATA TYPES — HOMEWORK  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This tries to build a greeting using the customer's first name.
// It logs "undefined Rivera" instead of "Alex Rivera". What's wrong?

const customerName = "alex rivera";
const cleanName    = customerName.trim().toLowerCase();

// Trying to capitalise the first letter:
const titled = cleanname[0].toUpperCase() + cleanname.slice(1);
console.log(`Hello, ${titled}!`);

// What's wrong ↓
// on line 16, the variable name is incorrectly written as "cleanname" instead of "cleanName". JavaScript is case-sensitive, so it doesn't recognize "cleanname" and returns undefined.

// Your fix ↓
// line 16 should be:
// const titled = cleanName[0].toUpperCase() + cleanName.slide(1);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This calculates the total for an order item.
// The result is "79.992" instead of 159.98. What's wrong?

const itemPrice = "79.99";  // from a form input
const itemQty   = 2;

const lineTotal = itemPrice * itemQty;  // works — * coerces
const receipt   = `Total: $${itemPrice + lineTotal}`; // bug here

console.log(receipt); // "Total: $79.99159.98" — wrong

// What's wrong ↓
// line 36 has a bug because item price is a string and when you use the + operator with a string and a number, it concatenates them instead of adding them. So instead of adding the lineTotal to itemPrice, it concatenates them as strings.

// Your fix ↓
// change itemPeice to a number before adding it to lineTotal. You can do this by using parseFloat or Number() function. For example:
// const receipt = `Total: $${parseFloat(itemPrice) + lineTotal}`;


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This builds a discount label and checks if a code is valid.
// There are TWO bugs — one produces a wrong boolean,
// one produces a wrong string.

const rawCode     = "  save10  ";
const validCode   = "SAVE10";

// Bug 1: comparing without cleaning
const isValid = rawCode === validCode;
console.log(`Code valid: ${isValid}`);  // false — wrong, should be true

// Bug 2: building a label with the raw code
const label = `Discount code: ${rawCode} — valid: ${isValid}`;
console.log(label); // shows messy whitespace in the label

// Bug 1 ↓
// The comparison is done without cleaning the rawCode. It has extra whitespace and is in lowercase, while validCode is uppercase and has no whitespace. To fix this, we should trim and convert rawCode to uppercase before comparing it to validCode.
// line 57 should be:
// const isValid = rawCode.trim().toUpperCase() === validCode;

// Bug 2 ↓
// The label is built with the raw code, which includes extra whitespace. We should trim the rawCode before including it in the label.
// line 61 should be:
// const label = `Discount code: ${rawCode.trim()} — valid: ${isValid}`;

