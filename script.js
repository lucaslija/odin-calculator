// Variables
let firstNum;
let secondNum;
let operator;

const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");
const numBtns = document.querySelector("#digits");
const functBtns = document.querySelector("#functions");
const equalsBtn = document.querySelector("#equals");

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
function numBtnGen() {
  for (i = 0; i < 10; i++) {
    let newButton = document.createElement("button");
    newButton.className = "num-btn";
    numBtns.appendChild(newButton);
  }
}

function functBtnGen() {
  for (i = 0; i < 4; i++) {
    let newButton = document.createElement("button");
    newButton.className = "funct-btn";
    functBtns.appendChild(newButton);
  }
}

numBtnGen();
functBtnGen();
