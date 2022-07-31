var calculation = {};
calculation.operandA = "";
calculation.operator = "";
calculation.operandB = "";
calculation.result = "";
let validNumber = /^[0-9_._,]+$/;
let validOperator = /^[A-Za-wy-z0-9_._,]+$/;
console.log(calculation);
const operandButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const assignmentOperator = document.querySelector('.assignment');
const outputOperation = document.querySelector('.text-calculation');
const backspace = document.querySelector('.backspace');
const clearButton = document.querySelector('.clear');
outputScreen = document.querySelector('.text-calculation');
resultScreen = document.querySelector('.text-result');

function getOperandValue(e) {
  let validNumber = /^[0-9]+$/;
  if(validNumber.test(e.key)|| this.innerText != "") {if (e.key != undefined) {this.innerText = e.key; console.log(e.key)} ;
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
}

function getOperatorValue(e) {
  if (calculation.operator == "") {
    if (e.key != undefined) { calculation.operator = e.key; }
    else {
  calculation.operator = this.innerText;}
  console.log(calculation);
  setOutput();
  }
}

function resetOperation() {
  calculation.operandA = calculation.result;
  outputScreen.innerText = calculation.operandA;
  resultScreen.innerText = "";
  calculation.operandB = "";
  calculation.operator = "";
  calculation.result = "";
  operatorButtons.forEach(button => button.classList.remove('operator-disable'));
}

function removeCharacter() {
  if ((calculation.operator == "") && (calculation.operandA != "")){
  calculation.operandA = calculation.operandA.slice(0,-1);
  console.log(calculation.operandA);
  outputScreen.innerText = calculation.operandA;
  } else if ((calculation.operandA != "") && (calculation.operator != "") && (calculation.operandB != "")) {
    calculation.operandB = calculation.operandB.slice(0,-1);
    console.log(calculation.operandB);
    outputScreen.innerText = calculation.operandA + calculation.operator + calculation.operandB;
  } else {
    calculation.operator = "";
    outputScreen.innerText = calculation.operandA;
  }
}

function computeNumbers(){
  if ( calculation.operandA != "" && calculation.operandB != "") {
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
  resetOperation();

}

function setOutput() {
  setOutputItem();
  if (calculation.result != "") { 
    calculation.result = parseFloat(Math.round(calculation.result * 100)/100).toString();
    resultScreen.innerText = `= ${calculation.result}`;
    }
}

function clearScreen() {
  outputScreen.innerText = ``;
  resultScreen.innerText = ``;
  calculation.operandA = "";
  calculation.operandB = "";
  calculation.operator = "";
  calculation.result = "";

  operatorButtons.forEach(button => button.classList.remove('operator-disable'));
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
document.addEventListener('keydown', (e) => { 
  if(validNumber.test(e.key)) {getOperandValue(e)}});

operatorButtons.forEach(button => button.addEventListener('click', getOperatorValue));
document.addEventListener('keypress', (e) => { 
  if(!validOperator.test(e.key)) {getOperatorValue(e)}});

operatorButtons.forEach(button => button.addEventListener('click', disableOperatorButtons));
document.addEventListener('keypress', (e) => { if(!validOperator.test(e.key)) {disableOperatorButtons()}});

assignmentOperator.addEventListener('click', computeNumbers);
document.addEventListener('keypress', (e) => { 
  if(e.key == 'Enter' || e.key == '=' ) {computeNumbers() }
else if(e.key == ' ') {clearScreen()}
});

backspace.addEventListener('click', removeCharacter);
document.addEventListener('keydown', (e) => { if(e.key == 'Backspace') {removeCharacter()}})


clearButton.addEventListener('click', () => { for(const key in calculation){calculation[key] = "";} console.log(calculation); clearScreen()});


    

