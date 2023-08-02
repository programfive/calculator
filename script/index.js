function appendCharacter(character) {
  document.getElementById('display').value += character;
}

function deleteLastCharacter() {
  let displayValue = document.getElementById('display').value;
  document.getElementById('display').value = displayValue.slice(0, -1);
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  let displayValue = document.getElementById('display').value;
  let result = eval(displayValue);
  document.getElementById('display').value = result;
}