var calculation = {};
calculation.operandA = "3";
calculation.operation = "*";
calculation.operandB = "7";
console.log(calculation);
const operandButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');

function getButtonValue() {

  calculation.operandA = this.innerText;
  console.log(calculation);
}

operandButtons.forEach(button => button.addEventListener('click', getButtonValue));

function addNumbers() {
  console.log(calculation.operandA + calculation.operandB);
}

operatorButtons.forEach(button => button.addEventListener('click', computeNumbers));

function computeNumbers(){
  switch (calculation.operation) {
    case '*':
      
      break;
  
    default:
      break;
  }
}