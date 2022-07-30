var calculation = {};
calculation.operandA = undefined;
calculation.operation = "*";
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

operandButtons.forEach(button => button.addEventListener('click', getOperandValue));

function addNumbers() {
  console.log(calculation.operandA + calculation.operandB);
}

operatorButtons.forEach(button => button.addEventListener('click', getOperationValue));

function computeNumbers(){
  calculation.operation = this.innerText;
  switch (calculation.operation) {
    case calculation.operation == 'x':
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
  console.log(calculation.result);
}