const text = document.querySelector('input[name="calc"]');
let operatorUsed = false;

$(document).ready(function() {
    text.value = 0;

    $("#equals").click(() => {
        $.ajax({
            type: "post",
            url: "action.php",
            data: $("form").serialize(),
            success: function(result) {
                try{
                    const answer = JSON.parse(result);
                    $("input[name='calc']").val(answer[0]);
                    $("#history-box").append(`<br /> ${answer[1]} = ${answer[0]}`);
                }
                catch(e){
                    text.style.border = "3px solid red";
                    setTimeout(() => {
                        text.style.border = "3px solid white";
                        text.value = 0;
                    }, 3000);
                }
            }
        });
        operatorUsed = false;
    });

    const buttonTable = [];
    for(let i = 0; i < 10; i++){
        let varName = `button~${i}`;
        buttonTable.push(new DigitButton(i));
    }
    const plusButton = new OperatorButton("+");
    const minusButton = new OperatorButton("-");
    const multiplyButton = new OperatorButton("*");
    const divideButton = new OperatorButton("/");
    const clearButton = new ClearButton();
    const commaButton = new CommaButton();
    const backspaceButton = new BackspaceButton();
});


class DigitButton {
    constructor(digit){
        this.digit = digit;

        const buttonID = `digit-${this.digit}`;
        const button = document.getElementById(buttonID);
        button.onclick = () => {
            if (text.value == 0){
                text.value = this.digit;
            }
            else text.value += this.digit;

        }
    }
}

class OperatorButton{
    constructor(operator) {
        this.operator = operator;

        switch(this.operator) {
            case "+":
                this.buttonID = "plus";
                break;
            case "-":
                this.buttonID = "minus";
                break;
            case "*":
                this.buttonID = "multiply";
                break;
            case "/":
                this.buttonID = "divide";
                break;
            default:
                this.buttonID = "plus";
                break;
        }

        const button = document.getElementById(this.buttonID);
        button.onclick = () => {
            if(operatorUsed === false) {
                text.value += ` ${this.operator} `;
                operatorUsed = true;
            }
        }
    }
}

class ClearButton{
    constructor() {
        const button = document.getElementById("clear-all");
        button.onclick = () => {
            text.value = 0;
            operatorUsed = false;
        }
    }

}

class CommaButton {
    constructor() {
        const button = document.getElementById("comma");
        button.onclick = () => {
            text.value += ".";
        }
    }
}

class BackspaceButton{
    constructor() {
        const button = document.getElementById("backspace");
        button.onclick = () => {
            if(text.value.charAt(text.value.length - 1) == " ") {
                text.value = text.value.slice(0, -2);
                operatorUsed = false;
            }
            if(text.value.length != 1)
                text.value = text.value.slice(0, -1);
            else
                text.value = 0;
        }
    }
}


