// Variables
let firstNum;
let secondNum;
let operator;

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
        subtract(a,b);
    } else if (operator == "*") {
        multiply(a, b);
    } else {
        divide(a, b);
    }
}