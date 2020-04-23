$(document).ready(function() {
    const secondNumber = $("input[name='secondNumber']");
    const operator = $("select");

    $("#calculate").click(() => {
        $.ajax({
            type: "post",
            url: "action.php",
            data: $("form").serialize(),
            success: function(result) {
                $("#result").html(result);
                $("input[name='firstNumber']").val(result);
                secondNumber.val("");
            }
        });
    });

    function isEmpty(str) {
        return (str || 0 !== str.length);
    }

    function checkValues() {
       if(isEmpty(secondNumber.val())){
            if(secondNumber.val() == 0 && operator.val() == "/") {
                $("#result").text("Niedozwolone");
                $("#calculate").prop("disabled", true);
            }
            else {
                $("#result").text("");
                $("#calculate").prop("disabled", false);
            }
        }
    }

    function ifInputsEmpty() {
        if (isEmpty($("input[name='firstNumber']").val()) || isEmpty(secondNumber.val()))
            $("#calculate").prop("disabled", true);
        else $("#calculate").prop("disabled", false);
    }

    operator.add(secondNumber).on("keyup change", checkValues);
});
