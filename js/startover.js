const calculator = {
    displayOperand: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };


function updateDisplay() {
  let display = document.getElementById('results-display');
  display.value = calculator.displayOperand;
}

updateDisplay();

let userControls = document.getElementById('user-controls');
userControls.addEventListener('click', getUserClick);

function getUserClick(event) {
  if ( event.target.classList.contains('numbers') ) {
    let userNumber = event.target.textContent;
    return userNumber;
  } else if ( event.target.classList.contains('operator') ) {
  console.log("operator");
  } else if ( event.target.classList.contains('clear') ) {
    console.log("clear");
  } else if ( event.target.classList.contains('decimal') ) {
    console.log("decimal");
  }

}


