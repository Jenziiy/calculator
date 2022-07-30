const buttons = document.querySelectorAll('button');

function getButtonValue() {
  console.log(this.innerText);
}

buttons.forEach(button => button.addEventListener('click', getButtonValue));