const text = document.querySelector('input[name="calc"]');

$(document).ready(function() {
    text.value = 0;

    $("#equals").click(() => {
        $.ajax({
            type: "post",
            url: "action.php",
            data: $("form").serialize(),
            success: function(result) {
                $("#history-box").html(result);
            }
        });
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

class OperatorButton {
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
                break;
        }

        const button = document.getElementById(this.buttonID);
        button.onclick = () => {
                text.value += ` ${this.operator} `;
        }
    }
}

class ClearButton {
    constructor() {
        const button = document.getElementById("clear-all");
        button.onclick = () => {
            text.value = 0;
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

