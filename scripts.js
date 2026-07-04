let first = null;
let second = null;
let operator = null;
let currentInput = "";

const display = document.getElementById("display");

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
    if (operator == "add") {
        return add(parseFloat(first), parseFloat(second));
    } else if (operator == "subtract") {
        return subtract(parseFloat(first), parseFloat(second));
    } else if (operator == "multiply") {
        return multiply(parseFloat(first), parseFloat(second));
    } else if (operator == "divide") {
        return divide(parseFloat(first), parseFloat(second));
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
        if (justCalculated) {
            currentInput = button.textContent;
            display.textContent = currentInput;
            justCalculated = false;
        } else {
            currentInput = currentInput + button.textContent;
            display.textContent = currentInput;
        }
    });
});

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (operator != null) {
            second = currentInput;
            currentInput = operate(operator, first, second);
            display.textContent = currentInput;
            first = currentInput;
            operator = button.id;
            justCalculated = true;
        } else {
            first = currentInput;
            operator = button.id;
            currentInput = "";
            display.textContent = button.textContent;
        }
        
    });
});

const decimalButton = document.getElementById("decimal");

decimalButton.addEventListener("click", function() {
    if (!currentInput.includes(".")) {
        currentInput = currentInput + ".";
        display.textContent = currentInput;
    }
});

const equalsButton = document.getElementById("equals");
let justCalculated = false;

equalsButton.addEventListener("click", function() {
    if (first != null && currentInput != "" && operator != null) {
        second = currentInput;
        currentInput = operate(operator, first, second);
        display.textContent = currentInput;
        justCalculated = true;
    }
});

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function() {
    first = null;
    second = null;
    operator = null;
    currentInput = "";
    display.textContent = 0;
});