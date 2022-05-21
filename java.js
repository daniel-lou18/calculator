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

const nums = ['', '', false, '', false];
let oper = '';
let num1 = '';
let num2 = '';
let result = 0;
const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');

const displayClick = function(e) {
    const num = `${this.id}`.slice(2);
    if (nums[2] === false) {
        num1 += num;
        console.log(num1);
        display.textContent = num1.replace(/^0\d/, num1.slice(1, 2));
    } else if(nums[2] === true && nums[4] === true) {
        num1 = '';
        num2 = '';
        nums[2] = false;
        nums[4] = false;
        num1 += num;
        display.textContent = num1.replace(/^0\d/, num1.slice(1, 2))
    } else if (nums[2] === true) {
        num2 += num;
        num2.replaceAll('^0+', '');
        display.textContent = num2.replace(/^0\d/, num2.slice(1, 2))
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
            console.log(num1, num2, result, nums);
        } else if (num2 === '' && nums[4] === false) {
            console.log('yoppie')
            num1 = nums[0];
            num2 = nums[0];
            nums[1] = num2;
            result = operate(nums[3], Number(nums[0]), Number(nums[1]));
            display.textContent = result;
            nums[0] = result;
            num2 = '';
            nums[3] = `${this.id}`.slice(2);
        } else if (nums[2] === true && nums[4] === true) {
            nums[0] = result;
            nums[4] = false;
            num2 = '';
            nums[3] = `${this.id}`.slice(2);
            console.log(num1, num2, result, nums);
        } else if (nums[2] === true) {
            nums[1] = num2;
            result = operate(nums[3], Number(nums[0]), Number(nums[1]));
            display.textContent = result;
            nums[0] = result;
            num2 = '';
            nums[3] = `${this.id}`.slice(2);
            console.log(num1, num2, result, nums);
        };
        nums[2] = true;
    }));
};

const pressEquals = function() {
    equals.addEventListener('click', function(e) {
        if (!num2) {
            nums[0] = num1;
        } else {
            nums[1] = num2;
            result = operate(nums[3], Number(nums[0]), Number(nums[1]));
            display.textContent = result;
            num2 = '';
            nums[4] = true;
            console.log(num1, num2, result, nums);
        };
    });
}

function NumOpNum() {
    displayNum();
    pressOperator();
    pressEquals();
};

NumOpNum();