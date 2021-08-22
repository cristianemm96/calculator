let calcButton = document.querySelectorAll('.button');
let result;
let totalOperation = [];
let firstNumber = [];
let secondNumber = [];
let operand = null;
let displayValue = [];
const isAnOptionValue = (value) => value == 'AC' || value == '+/-' || value == '%';
let isAnOperand = (value) => value == '+' || value == '-' || value == '*' || value == '/'
let getClicked = function(){
  calcButton.forEach(button =>{
      button.addEventListener('click', e =>{
        mkOperation(button.id);
    })
  })
}

const isANumber = (value) => (! isAnOptionValue(value)) && (! isAnOperand(value)) && value != '=';
let numA;
let numB;
function mkOperation(value){
  if(!operand && isANumber(value) && !result){
    setFirstNumber(value);
    console.log('1-' + numA);
  }
  if(!operand && isANumber(value) && result){
    setFirstNumber(value);
  }
  else if(isAnOperand(value) && firstNumber.length > 0 && !operand){
    operand = value;
  }
  else if(isAnOperand(value) && isANumber(result)  && !operand){
    operand = value;
  }
  else if(operand && isANumber(value) && result){
    setSecondNumber(value);
    numA = result;
    console.log('2-' + result);
  }
  else if(operand && isANumber(value) && firstNumber.length > 0 && !result){
    setSecondNumber(value);
    numA = parseInt(firstNumber.join(''));
  }
  else if (operand && isAnOperand(value) && isANumber(numB) && numB != null){
    tryToEvaluate()
    numA = result;
    setValuesArrayToNull();
    operand = value;
  }
  else if (operand && numA && isANumber(numB) && value == '='){
    tryToEvaluate();
  }
  else if(isAnOptionValue(value)){
    applyOption(value);
  }
  else{
    return
  }
}

function setSecondNumber(value) {
  secondNumber.push(value);
  numB = parseInt(secondNumber.join(''));
  screen.innerHTML = numB;
}

function setFirstNumber(value) {
  firstNumber.push(value);
  numA = parseInt(firstNumber.join(''));
  screen.innerHTML = numA;
}

function setValuesArrayToNull() {
  firstNumber.splice(0, firstNumber.length);
  secondNumber.splice(0, secondNumber.length);
}

function applyOption(value){
  if(value == 'AC'){
    setACOption();
  }
}


function setACOption() {
  screen.innerHTML = 0;
  setValuesArrayToNull();
  numB = null;
  numA = null;
  result = null;
  operand = null;
}

function tryToEvaluate() {
  if((isANumber(numA) && isANumber(numB) || isANumber(numA) && isANumber(result)) && operand){
    evaluate(numA, operand, numB);
    numA = result;
    operand = null;
  }
  else{
    return;
  }
}

function evaluate(numA, op, numB){
    result = operate(op, numA, numB);
    screen.innerHTML = result;
    setValuesArrayToNull();
}

function operate(op, numA, numB){
  if(op == '+'){
    return add(numA, numB)
  }
  else if( op == '-'){
    return substract(numA, numB);
  }
  else if(op == '*'){
    return multiply(numA, numB)
  }
  else if(op == '/'){    
    return divide(numA, numB)
  }
}

function divide(numA, numB) {
  if (numB != 0){
    console.log('ok divide');
    return (parseFloat(numA / numB)).toFixed(2);
  }
  else{
    console.log('errorr');
    return 'Error'
  }
}

function multiply(numA, numB) {
  return parseFloat(numA * numB).toFixed(2);
}

function substract(numA, numB) {
  return numA - numB;
}

function add(numA, numB) {
  return parseFloat(numA)+ parseFloat(numB);
}


getClicked();

