import {assignmentOperator, backspace, clearButton, decimalButton, operandButtons, operatorButtons, outputOperation,  outputScreen, resultScreen, speechBubble, validNumber, validOperator} from './consts.js'
var calculation = {};
calculation.operandA = "";
calculation.operator = "";
calculation.operandB = "";
calculation.result = "";
console.log(calculation);



function getOperandValue() {
  if(calculation.operator == "") {
    if( /[,_.]/.test(calculation.operandA) && this.innerText == '.' || this.innerText == ',') {this.innerText = ""};
    calculation.operandA += this.innerText; //gets rid of trailing zero.
    console.log(this.innerText);
    outputScreen.innerText = calculation.operandA;
  } else if(calculation.operator != "") {
    if( /[,_.]/.test(calculation.operandB) && this.innerText == '.' || this.innerText == ',') {this.innerText = ""};
    calculation.operandB += this.innerText; 
    console.log(this.innerText);
    outputScreen.innerText = calculation.operandB;
  }
  decimalButton.innerText = '.';
  console.log(calculation);
  setOutput();
  }

function getOperandValueKey(e) {
  let validNumber = /^[0-9_._,]+$/;
  console.log(e.key);
  if(validNumber.test(e.key)|| outputOperation.innerText != "") {if (e.key != undefined) {outputOperation.innerText = e.key;} ;
  if(calculation.operator == "") {
    if( /[,_.]/.test(calculation.operandA) && outputOperation.innerText == '.' || outputOperation.innerText == ',') {outputOperation.innerText = ""};
    calculation.operandA += outputOperation.innerText; //gets rid of trailing zero.
    console.log(outputOperation.innerText);
    outputScreen.innerText = calculation.operandA;
  } else if(calculation.operator != "") {
    if( /[,_.]/.test(calculation.operandB) && outputOperation.innerText == '.' || outputOperation.innerText == ',') {outputOperation.innerText = ""};
    calculation.operandB += outputOperation.innerText; 
    console.log(outputOperation.innerText);
    outputScreen.innerText = calculation.operandB;
  }
  decimalButton.innerText = '.';
  console.log(calculation);
  setOutput();
  }
}

function getOperatorValue(e) {
  if (calculation.operator == "" && calculation.operandA != "") {
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
  if (calculation.operator == '/' && (calculation.operandB == 0 ^ calculation.operandA == 0)) {
    document.querySelector('.calculator').style.display = "none";
    speechBubble.style.display = "block";
  } else if (calculation.operator == '/' && (calculation.operandB == 0 && calculation.operandA == 0)) {
    document.querySelector('.calculator').style.display = "none";
    speechBubble.style.display = "block";
    speechBubble.innerText = 'OMGG YOU SHOULD NOT DIVIDE BY ZERO DATS LIEK SUPER UNDEFINED';
    speechBubble.style.backgroundImage = "url('../img/unicorn.png')";
  };
  
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
  if(validNumber.test(e.key)) {getOperandValueKey(e)}});

operatorButtons.forEach(button => button.addEventListener('click', getOperatorValue));
document.addEventListener('keypress', (e) => { 
  if(!validOperator.test(e.key)) {getOperatorValue(e)}});

operatorButtons.forEach(button => button.addEventListener('click', disableOperatorButtons));
document.addEventListener('keypress', (e) => { if(!validOperator.test(e.key)) {disableOperatorButtons()}});

assignmentOperator.addEventListener('click', computeNumbers);
document.addEventListener('keydown', (e) => { 
  if(e.code == 'Enter') {computeNumbers() }
else if(e.code == 'Space') {clearScreen()}
});

document.addEventListener('keypress', (e) => { 
  if(e.key == '=' ) {computeNumbers() }
});

backspace.addEventListener('click', removeCharacter);
document.addEventListener('keydown', (e) => { if(e.key == 'Backspace') {removeCharacter()}})


clearButton.addEventListener('click', () => { for(const key in calculation){calculation[key] = "";} console.log(calculation); clearScreen()});
decimalButton.addEventListener('click', getOperandValue);

speechBubble.addEventListener('click', () => {
  document.querySelector('.calculator').style.display = 'flex';
  document.querySelector('.speech-bubble').style.display = 'none';
  clearScreen()});