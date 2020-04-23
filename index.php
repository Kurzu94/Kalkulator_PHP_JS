<?php

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Calculator</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
        <link href="stylesheet.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <div class="col-md-8 col-sm-12" id="calculator-body">
                <p>CS Calculator</p>
                <form method="POST">
                <input type="text" name="calc" />
                <div id="clear-all" class="col-6 calc-button func-button">CE</div>
                <div id="backspace" class="col-6 calc-button func-button">&#9003;</div>
                <div id="percentage" class="calc-button col-3 func-button">%</div>
                <div id="power" class="calc-button col-3 func-button">pow(x)</div>
                <div id="sqrt" class="calc-button col-3 func-button">&#8730;x</div>
                <div id="divide" class="calc-button col-3 func-button">&#247;</div>
                <div id="digit-1" class="calc-button col-3">1</div>
                <div id="digit-2" class="calc-button col-3">2</div>
                <div id="digit-3" class="calc-button col-3">3</div>
                <div id="multiply" class="calc-button col-3 func-button">x</div>
                <div id="digit-4" class="calc-button col-3">4</div>
                <div id="digit-5" class="calc-button col-3">5</div>
                <div id="digit-6" class="calc-button col-3">6</div>
                <div id="minus" class="calc-button col-3 func-button">-</div>
                <div id="digit-7" class="calc-button col-3">7</div>
                <div id="digit-8" class="calc-button col-3">8</div>
                <div id="digit-9" class="calc-button col-3">9</div>
                <div id="plus" class="calc-button col-3 func-button">+</div>
                <div id="digit-0" class="calc-button col-3">0</div>
                <div id="comma" class="calc-button col-3 func-button">,</div>
                <div id="equals" class="calc-button col-6 equals-button" onclick="calculate()">=</div>
                <button type="submit">=</button>
                </form>
            </div>
            <div class="col-md-4 col-sm-12" id="history-box">
                History
            </div>
        </div>
        <script type="text/javascript" src ="script.js"></script>
    </body>
</html>