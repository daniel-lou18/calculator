const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
const operate = function(operator, a, b) {
    if (operator === '+') return add(a,b);
    else if (operator === '-') return subtract(a,b);
    else if (operator === '*') return multiply(a,b);
    else if (operator === '/') return divide(a,b);
    else return "Not a valid operator";
};

const nums = ['', '', false, '', false];
let num1 = '';
let num2 = '';
let result = 0;
const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

const longNumber = function() {
    if ((result.toString()).includes('.') && result < 1000 && result >= 0.00000001) {
        display.textContent = parseFloat((Number(result).toFixed(8)).toString());
    } else if ((result.toString()).includes('.') && 1000000 > result && result >= 1000) {
        display.textContent = parseFloat((Number(result).toFixed(5)).toString());
    } else if ((result.toString()).includes('.') && 1000000000 > result && result >= 1000000) {
        display.textContent = parseFloat((Number(result).toFixed(2)).toString());
    } else if (result >= 1000000000 || result < 0.00000001) {
        display.textContent = Number(result).toExponential(6);
    };
};

const displayClick = function(e) {
    const num = `${this.id}`.slice(2);
    if (nums[2] === false) {
        num1 += num;
        num1 = num1.replace(/^(0[0-9])/, num1.slice(1, 2));
        if (num1.length > 11) {
            num1 = num1.slice(0,11);
        } else if (num1 === '.') {
            num1 = '0.';
        } else if (num1.match(/\..+?\./g)) {
            num1 = 'IP address? LOL';
            pressClear();
        };
        display.textContent = num1;
    } else if (nums[2] === true && nums[4] === true) {
        num1 = '';
        num2 = '';
        nums[2] = false;
        nums[4] = false;
        num1 += num;
        num1 = num1.replace(/^0[0-9]/, num1.slice(1, 2));
        if (num1.length > 11) {
            num1 = num1.slice(0,11);
        } else if (num1 === '.') {
            num1 = '0.';
        } else if (num1.match(/\..+?\./g)) {
            num1 = 'IP address? LOL';
            pressClear();
        };
        display.textContent = num1;
    } else if (nums[2] === true) {
        num2 += num;
        num2 = num2.replace(/^0[0-9]/, num2.slice(1, 2));
        if (num2.length > 11) {
            num2 = num2.slice(0,11);
        } else if (num2 === '.') {
            num2 = '0.';
        } else if (num2.match(/\..+?\./g)) {
            num2 = 'IP address? LOL';
            pressClear();
        };
        display.textContent = num2;
    };
};

const displayNum = function() {
    numbers.forEach(number => number.addEventListener('click', displayClick));
};

const pressOperator = function() {
    operators.forEach(operator => operator.addEventListener('click', function(e) {
        if (nums[2] === false) {
            nums[0] = num1;
            nums[3] = `${this.id}`.slice(2);
        } else if (num2 === '' && nums[4] === false) {
            num1 = nums[0];
            num2 = nums[0];
            nums[1] = num2;
            result = operate(nums[3], Number(nums[0]), Number(nums[1]));
            display.textContent = parseFloat(result);
            if (result.toString().length > 11) {
                longNumber();
            };
            nums[0] = result;
            num2 = '';
            nums[3] = `${this.id}`.slice(2);
        } else if (nums[2] === true && nums[4] === true) {
            nums[0] = result;
            nums[4] = false;
            num2 = '';
            nums[3] = `${this.id}`.slice(2);
        } else if (nums[2] === true) {
            nums[1] = num2;
            result = operate(nums[3], Number(nums[0]), Number(nums[1]));
            display.textContent = parseFloat(result);
            if (result.toString().length > 11) {
                longNumber();
            };
            nums[0] = result;
            num2 = '';
            nums[3] = `${this.id}`.slice(2);
        };
        nums[2] = true;
    }));
};

const pressEquals = function() {
    equals.addEventListener('click', function(e) {
        if (!num2) {
            num1 = '';
            nums[0] = num1;
        } else {
            nums[1] = num2;
            result = operate(nums[3], Number(nums[0]), Number(nums[1]));
            display.textContent = parseFloat(result);
            if (result.toString().length > 11) {
                longNumber();
            };
            num2 = '';
            nums[4] = true;
        };
    });
};

const pressClear = function() {
    clear.addEventListener('click', function(e) {
        num1 = '';
        num2 = '';
        result = 0;
        nums[0] = num1;
        nums[1] = num2;
        nums[2] = false;
        nums[3] = '';
        nums[4] = 'false';
        display.textContent = '0';
    });
};


function NumOpNum() {
    displayNum();
    pressOperator();
    pressEquals();
    pressClear();
};

NumOpNum();