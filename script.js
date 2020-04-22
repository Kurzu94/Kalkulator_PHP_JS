$(document).ready(function() {
    $("#calculate").click(() => {
        $.ajax({
            type: "post",
            url: "action.php",
            data: $("form").serialize(),
            success: function(result) {
                $("#result").html(result);
            }
        });

    });

    $("#num1").click(() => {
        $("input[name='firstNumber']").value += 1;
    });
});


/*const firstNumber = document.querySelector("input[name='firstNumber']");

function accessCookie(cookieName)
{
    let name = cookieName + "=";
    let cookieArray = document.cookie.split(';');
    let temp = cookieArray[0].trim();
    if (temp.indexOf(name)==0) return temp.substring(name.length,temp.length);
}

const cookie = parseInt(accessCookie("answer"));
if(!isNaN(cookie)) {
    const answer = document.getElementById("answer");
    answer.innerText = `Wynik to: ${cookie}`;
    firstNumber.value = cookie;
}
const secondNumber = document.querySelector("input[name='secondNumber']");
const operator = document.querySelector("select[name='operator']");
const submit = document.querySelector("button[name='submit']");

function validate(){
    if(secondNumber.value == 0 && operator.value == "/") {
        answer.innerText = "Błędna wartość";
        submit.enable = false;
    }
    else answer.innerText = "";
}
secondNumber.onkeyup = validate;
operator.onchange = validate;*/
