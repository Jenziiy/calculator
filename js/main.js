var calculation = {};
calculation.operandA = "";
calculation.operator = "";
calculation.operandB = "";
calculation.result = "";
console.log(calculation);
const operandButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const assignmentOperator = document.querySelector('.assignment');
const outputOperation = document.querySelector('.text-calculation');
const backspace = document.querySelector('.backspace');
const clearButton = document.querySelector('.clear');
outputScreen = document.querySelector('.text-calculation');
resultScreen = document.querySelector('.text-result');

function getOperandValue() {
//let validNumber = /^[0-9]+$/;
  if(calculation.operator == "") {
    calculation.operandA += parseInt(this.innerText); //rids trailing zero.
    console.log(this.innerText);
    outputScreen.innerText = calculation.operandA;
  } else if(calculation.operator != 0) {
    calculation.operandB += parseInt(this.innerText); 
    console.log(this.innerText);
    outputScreen.innerText = calculation.operandB;
  }
  console.log(calculation);
  setOutput();
}

function getOperatorValue() {
  if (calculation.operator == "") {
  calculation.operator = this.innerText;
  console.log(calculation);
  setOutput();
  }
}

function resetOperands() {
  calculation.operandA = calculation.result;
  outputScreen.innerText = calculation.operandA;
  resultScreen.innerText = "";
  calculation.operandB = "";
  calculation.operator = "";
  calculation.result = "";
}

function removeCharacter() {
  if (calculation.operator == 0 && (calculation.operandA != 0)){
  calculation.operandA = calculation.operandA.slice(0,-1);
  console.log(calculation.operandA);
  outputScreen.innerText = calculation.operandA;
  } else if (calculation.operandA != 0) {
    calculation.operandB = calculation.operandB.slice(0,-1);
    console.log(calculation.operandB);
    outputScreen.innerText = calculation.operandA;
  }
}

function setOutput() {
  outputScreen.innerText = `${calculation.operandA} ${calculation.operator} ${calculation.operandB} `;
  if (calculation.result != "") { 
    resultScreen.innerText = `= ${calculation.result}`;
    }
}
function clearOutput() {
  outputScreen.innerText = ``;
  resultScreen.innerText = ``;
}

function setOutputItem() {
  outputScreen.innerText = `${calculation.operandA} ${calculation.operator} ${calculation.operandB}`;
}

function disableOperatorButtons() {
  if ( calculation.operandB != "") {
    operatorButtons.forEach(button => button.classList = 'operator-disable');
  }
}

operandButtons.forEach(button => button.addEventListener('click', getOperandValue));

operatorButtons.forEach(button => button.addEventListener('click', getOperatorValue));

operatorButtons.forEach(button => button.addEventListener('click', disableOperatorButtons));

assignmentOperator.addEventListener('click', computeNumbers);

backspace.addEventListener('click', removeCharacter);

clearButton.addEventListener('click', () => { for(const key in calculation){calculation[key] = "";} console.log(calculation); clearOutput()});


    

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
          calculation.result = +calculation.operandA + +calculation.operandB;
        break;
        case '-':
          calculation.result = +calculation.operandA - +calculation.operandB;
        break;  
      default:
        break;
     }
  }
  console.log(calculation);
  setOutput();
  resetOperands();

}