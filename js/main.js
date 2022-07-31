var calculation = {};
calculation.operandA = "";
calculation.operator = 0;
calculation.operandB = "";
calculation.result = 0;
console.log(calculation);
const operandButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const assignmentOperator = document.querySelector('.assignment');
const outputOperation = document.querySelector('.text-calculation');
const backspace = document.querySelector('.backspace');

function getOperandValue() {
//let validNumber = /^[0-9]+$/;
  if(calculation.operator == "") {
    calculation.operandA += parseInt(this.innerText); //rids trailing zero.
    console.log(this.innerText);
  } else if(calculation.operator != 0) {
    calculation.operandB += parseInt(innerText); 
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

function removeCharacter() {
  if (calculation.operator == 0){
  calculation.operandA = calculation.operandA.slice(0,-1);
  console.log(calculation.operandA);
  } else {
    calculation.operandB = calculation.operandB.slice(0,-1);
    console.log(calculation.operandB);
  }
}

operandButtons.forEach(button => button.addEventListener('click', getOperandValue));

operatorButtons.forEach(button => button.addEventListener('click', getOperatorValue));

assignmentOperator.addEventListener('click', computeNumbers);

backspace.addEventListener('click', removeCharacter);

function computeNumbers(){
  if ( calculation.operandA != undefined && calculation.operandB != undefined) {
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
  }
  console.log(calculation);
  resetOperands();

}