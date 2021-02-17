const calculatorDisplay = document.querySelector('#results-display');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

// Caluclate first and second values depending on operator
const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber/secondNumber,

    '*': (firstNumber, secondNumber) => firstNumber*secondNumber,

    '+': (firstNumber, secondNumber) => firstNumber+secondNumber,

    '-': (firstNumber, secondNumber) => firstNumber-secondNumber,

    '=': (firstNumber, secondNumber) => secondNumber,
}

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
    // Replace the current display value if first value is entered
    if(awaitingNextValue) {
        calculatorDisplay.value = number;
        awaitingNextValue = false;
    } else {
        // if current display value is 0, replace it, if not add to it
        const displayValue = calculatorDisplay.value;    
        calculatorDisplay.value = displayValue === '0'? number : displayValue + number;
    }
}

function addDecimal() {
    // if operator pressed, dont add decimal
    if(awaitingNextValue) return;
    // if no decimal, add one
    if(!calculatorDisplay.value.includes('.')) {
        calculatorDisplay.value = `${calculatorDisplay.value}.`;
    }
}

function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.value);
    // Prevent multiple operators
    if(operator && awaitingNextValue) {
        operatorValue = operator;
        return;
    }
    // assign first value if no value
    if(!firstValue) {
        firstValue = currentValue;
    } else {
        const calulation = calculate[operatorValue](firstValue, currentValue);
        calculatorDisplay.value = calulation;
        firstValue = calulation;
    }
    // Ready for next value, store operator
    awaitingNextValue = true;
    operatorValue = operator;
}

// Reset all values, display
function resetAll() {
    calculatorDisplay.value = '0';
    firstValue = 0;
    operator = '';
    awaitingNextValue = false;
}

// event listener 
clearBtn.addEventListener('click', resetAll);

// Add event listeners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
    if( inputBtn.classList.contains('numbers') ) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if( inputBtn.classList.contains('operator') ) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    } else if( inputBtn.classList.contains('decimal') ) {
        inputBtn.addEventListener('click', () => addDecimal());
    } else if( inputBtn.classList.contains('operator') ) {
        inputBtn.addEventListener('click', () => sendNumberValue);
    }
})
