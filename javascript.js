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
let num1 = 0;
let num2 = '';

const displayNum = function() {
    const numbers = document.querySelectorAll('.number');
    const display = document.querySelector('.display');
    numbers.forEach(number => number.addEventListener('click', function(e) {
        const num = `${this.id}`.slice(2);
        if (display.textContent === '0') {
            display.textContent = '';
        };
        display.textContent += num;
    }));
};

const displayNum2 = function() {
    const numbers = document.querySelectorAll('.number');
    const display = document.querySelector('.display');
    numbers.forEach(number => number.addEventListener('click', function(e) {
        const num = `${this.id}`.slice(2);
        num2 += num;
        display.textContent = num2;
        console.log(oper);
        console.log(num1);
        console.log(num2);
    }));
};

const pressOperator = function() {
    const operators = document.querySelectorAll('.operator');
    const display = document.querySelector('.display');
    operators.forEach(operator => operator.addEventListener('click', function(e) {
        oper = `${this.id}`.slice(2);
        num1 = Number(display.textContent);
        displayNum2();
    }));
};

function NumOpNum() {
    displayNum();
    pressOperator();
};

NumOpNum();