//Variables
const operators = document.querySelector('#operators');
const numbers = document.querySelector('#numbers');
const calcScreen = document.querySelector('.calculator-screen')







//Event listeners
eventlisteners();

function eventlisteners() {
    
    window.addEventListener('DOMContentLoaded', defaultDisplay);

    operators.addEventListener('click', selectOperator);

    numbers.addEventListener('click', selectNumber);

}







//Functions

function defaultDisplay(e) {
    calcScreen.innerHTML = '0';
}

function selectOperator(e) {
    e.preventDefault();


    console.log(e.target.textContent);
}

function selectNumber(e) {
    e.preventDefault();

    console.log(e.target.textContent)
}
