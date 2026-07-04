let first = 0;
let second = 0;
let operator = "";
let currentInput = "";

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

function operate(operator, first, second) {
    if (operator == "+") {
        return add(first, second);
    } else if (operator == "-") {
        return subtract(first, second);
    } else if (operator == "*") {
        return multiply(first, second);
    } else if (operator == "/") {
        return divide(first, second);
    }
}

const zeroButton = document.getElementById("zero");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");

const digitButtons = document.querySelectorAll(".digit");

digitButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        currentInput = currentInput + button.textContent;
        document.getElementById("display").textContent = currentInput;
    });
});

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(function(button) {
    button.addEventListener("click", function() {

    });
});

const decimalButton = document.getElementById("decimal");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");