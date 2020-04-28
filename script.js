class DigitButton {
    constructor(digit){
        this.digit = digit;

        const text = document.querySelector('input[name="calc"]');
        const buttonID = `digit-${this.digit}`;
        const button = document.getElementById(buttonID);
        button.onclick = () => {
            text.value += this.digit;
        }
    }
}

class FunctionButton {
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

        const text = document.querySelector('input[name="calc"]');
        const button = document.getElementById(this.buttonID);
        button.onclick = () => {
                text.value += ` ${this.operator} `;
        }
    }
}
$(document).ready(function() {

    const secondNumber = $("input[name='secondNumber']");
    //const operator = $("select");

    $("#equals").click(() => {
        $.ajax({
            type: "post",
            url: "action.php",
            data: $("form").serialize(),
            success: function(result) {
                $("#history-box").html(result);
                secondNumber.val("");
            }
        });
    });

    const buttonTable = [];
    for(let i = 0; i < 10; i++){
        let varName = `button~${i}`;
        buttonTable.push(new DigitButton(i));
    }

    const plusButton = new FunctionButton("+");
    const minusButton = new FunctionButton("-");
    const multiplyButton = new FunctionButton("*");
    const divideButton = new FunctionButton("/");
});
