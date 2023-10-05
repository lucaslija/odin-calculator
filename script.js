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
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (i = 0; i < 10; i++) {
    let newButton = document.createElement("button");
    newButton.className = "num-btn";
    newButton.setAttribute("id", `btn-${digits[i]}`);
    newButton.textContent = digits[i];
    numBtns.appendChild(newButton);
  }
}

function functBtnGen() {
  let functList = ["+", "-", "X", "/"];
  for (i = 0; i < 4; i++) {
    let newButton = document.createElement("button");
    newButton.className = "funct-btn";
    newButton.setAttribute("id", `op-${functList[i]}`);
    newButton.textContent = functList[i];
    functBtns.appendChild(newButton);
  }
}

numBtnGen();
functBtnGen();
