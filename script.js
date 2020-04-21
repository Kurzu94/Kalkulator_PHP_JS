class DigitButton {
    constructor(digit){
        this.digit = digit;

        const text = document.querySelector('input[type="text"]');
        const buttonID = `digit-${this.digit}`;
        const button = document.getElementById(buttonID);
        button.onclick = () => {
            text.value += this.digit;
        }
    }
}

class FunctionButton {

    operation(operator){
        this.operator = operator;

        (this.operator === "+") ? this.buttonID = "plus" :
        (this.operator === "-") ? this.buttonID = "minus" :
        (this.operator === "/") ? this.buttonID = "divide" :
        (this.operator === "*") ? this.buttonID = "multiply" :
        this.buttonID = "";


        const text = document.querySelector('input[type="text"]');
        const button = document.getElementById(this.buttonID);
        button.onclick = () => {
            if (text.value.charAt(text.value.length - 1) !== this.operator) {
                text.value += this.operator;
            }
        }
    }
}


const button0 = new DigitButton(0);
const button1 = new DigitButton(1);
const button2 = new DigitButton(2);
const button3 = new DigitButton(3);
const button4 = new DigitButton(4);
const button5 = new DigitButton(5);
const button6 = new DigitButton(6);
const button7 = new DigitButton(7);
const button8 = new DigitButton(8);
const button9 = new DigitButton(9);
const plusButton = new FunctionButton();
plusButton.operation("+");
const minusButton = new FunctionButton();
minusButton.operation("-");
const multiplyButton = new FunctionButton();
multiplyButton.operation("*");
const divideButton = new FunctionButton();
divideButton.operation("/");
