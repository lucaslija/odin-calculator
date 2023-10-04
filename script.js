// Variables
let firstNum;
let secondNum;
let operator;

const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");

// Operators
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if (operator == "+") {
    add(a, b);
  } else if (operator == "-") {
    subtract(a, b);
  } else if (operator == "*") {
    multiply(a, b);
  } else {
    divide(a, b);
  }
}

// Display
function buttonGen() {
  for (i = 0; i < 20; i++) {
    let newButton = document.createElement("button");
    newButton.className = "btn";
    buttons.appendChild(newButton);
  }
}

buttonGen();