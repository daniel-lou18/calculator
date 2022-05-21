const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
const operate = function(operator, a, b) {
    if (operator === '+') return add(a,b);
    else if (operator === '-') return subtract(a,b);
    else if (operator === '*') return multiply(a,b);
    else if (operator === '/') return divide(a,b);
    else return "Not a valid operator"
};

let oper = '';
let num1 = '';
let num2 = '';
let result = 0;
let equal = '';
const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');

const displayClick = function(e) {
    e.stopPropagation();
    const num = `${this.id}`.slice(2);
    if (!oper) {
        num1 += num;
        display.textContent = num1;
    } else if (equal) {
        num1 = num;
        num2 = 0;
        equal = false;
        display.textContent = num1;
    } else if (oper) {
        num2 += num;
        display.textContent = num2;
    }; 
};

const displayNum = function() {
    numbers.forEach(number => number.addEventListener('click', displayClick));
};

const pressOperator = function() {
    operators.forEach(operator => operator.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!oper) {
            oper = `${this.id}`.slice(2);
            console.log(num1, num2, result);
        } else if (equal) {
            num1 = result;
            equal = false;
        } else if (oper) {
            result = operate(oper, Number(num1), Number(num2));
            display.textContent = result;
            num1 = result;
            num2 = '';
            oper = `${this.id}`.slice(2);
            console.log(num1, num2, result);
        }
    }));
};

const pressEquals = function() {
    equals.addEventListener('click', function(e) {
        e.stopPropagation();
        result = operate(oper, Number(num1), Number(num2));
        display.textContent = result;
        num1 = result;
        num2 = '';
        equal = true;
        console.log(equal);
    })
}

function NumOpNum() {
    displayNum();
    pressOperator();
    pressEquals();
};

NumOpNum();