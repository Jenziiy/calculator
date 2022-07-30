var calculation = {};
calculation.operandA = undefined;
calculation.operator = undefined;
calculation.operandB = undefined;
calculation.result = "";
console.log(calculation);
const operandButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const assignmentOperator = document.querySelector('.assignment');

function getOperandValue() {
let validNumber = /^[0-9]+$/;
  if(validNumber.test(this.innerText) && (calculation.operandA == undefined)) {
    calculation.operandA = this.innerText;
    console.log(this.innerText);
  } else if(validNumber.test(this.innerText)) {
    calculation.operandB = this.innerText;
    console.log(this.innerText);
  }
  console.log(calculation);
}

function getOperatorValue() {
  calculation.operator = this.innerText;
  console.log(calculation);
}

function resetOperands() {
  calculation.operandA = undefined;
  calculation.operandB = undefined;
}

operandButtons.forEach(button => button.addEventListener('click', getOperandValue));

operatorButtons.forEach(button => button.addEventListener('click', getOperatorValue));

assignmentOperator.addEventListener('click', computeNumbers);

function computeNumbers(){
  switch (calculation.operator) {
    case 'x':
        calculation.result = calculation.operandA * calculation.operandB;
      break;
      case '/':
        calculation.result = calculation.operandA / calculation.operandB;
      break;
      case '+':
        calculation.result = calculation.operandA + calculation.operandB;
      break;
      case '-':
        calculation.result = calculation.operandA - calculation.operandB;
      break;  
    default:
      break;
  }
  console.log(calculation);
  resetOperands();

}