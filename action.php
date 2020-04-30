<?php
    include 'calculator.class.php';

    $calcOutput = $_POST['calc'];
    $args = explode(" ", $calcOutput);

    $firstNumber = floatval($args[0]);
    if(isset($args[2])) $secondNumber = floatval($args[2]);
    else $secondNumber = 0;
    if(isset($args[1])) $operator = $args[1];
    else $operator = "+";

    $answer = new Calculator($firstNumber, $secondNumber, $operator);
    try {
        $answerPush = [floatval($answer->calculate()), $calcOutput];
        echo json_encode($answerPush);
    }
    catch (Error $e) {
        echo $e;
    }