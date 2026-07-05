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
        result = add(parseFloat(first), parseFloat(second));
    } else if (operator == "subtract") {
        result = subtract(parseFloat(first), parseFloat(second));
    } else if (operator == "multiply") {
        result = multiply(parseFloat(first), parseFloat(second));
    } else if (operator == "divide") {
        if (parseFloat(second) === 0) {
            return "Error, cannot divide by zero.";
        } else {
            result = divide(parseFloat(first), parseFloat(second));
        }
    }
    return trimResult(result.toFixed(9));
}

function trimResult(num) {
    if (num.includes(".")) {
        num = num.replace(/0+$/, "");
        num = num.replace(/\.$/, "");
    }

    return num;
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
        if (operator == null && currentInput == "") {
            return;
        }

        if (operator != null && currentInput == "") {
            operator = button.id;
            display.textContent = button.textContent;
            return;
        }

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
        
        currentInput = "";
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
    } else {
        display.textContent = "Please Enter the full Operation."
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

const keyToButtonId = {
    "0" : "zero",
    "1" : "one",
    "2" : "two",
    "3" : "three",
    "4" : "four",
    "5" : "five",
    "6" : "six",
    "7" : "seven",
    "8" : "eight",
    "9" : "nine",
    "+" : "add",
    "-" : "subtract",
    "*" : "multiply",
    "/" : "divide",
    "." : "decimal",
    "Enter" : "equals",
    "=" : "equals",
    "Delete" : "clear",
    "Backspace" : "backspace"
};

document.addEventListener("keydown", function(event) {
    const buttonId = keyToButtonId[event.key];
    if (buttonId) {
        event.preventDefault();
        document.getElementById(buttonId).click();
    }
});

const backspaceButton = document.getElementById("backspace");

backspaceButton.addEventListener("click", function() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        if (currentInput === "") {
            display.textContent = 0;
        } else {
            display.textContent = currentInput;
        }
    }
})