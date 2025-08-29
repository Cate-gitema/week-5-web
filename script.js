// ==========================
// Part 1: Variables & Conditionals
// ==========================
let userName = "Bob";
let isLoggedIn = true;

if (isLoggedIn) {
  console.log(userName + " is logged in.");
} else {
  console.log("User not logged in.");
}

// ==========================
// Part 2: Custom Functions
// ==========================
function greetUser(name) {
  return "Hello, " + name + "!";
}

function double(num) {
  return num * 2;
}

// ==========================
// Part 3: Loops
// ==========================

// Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("Count:", i);
}

// Example 2: While loop
let j = 0;
while (j < 3) {
  console.log("While loop number:", j);
  j++;
}

// ==========================
// Part 4: DOM Interactions
// ==========================

// 1. Change text of an element
document.getElementById("title").textContent = "Hello from JavaScript!";

// 2. Add event listener to button
document.getElementById("greetBtn").addEventListener("click", function () {
  document.getElementById("description").textContent = greetUser(userName);
});

// 3. Dynamically add list items to the page
let list = document.getElementById("numberList");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = "Number: " + double(i);
  list.appendChild(li);
}
