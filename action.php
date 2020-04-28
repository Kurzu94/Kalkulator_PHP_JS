<?php
    include 'calculator.class.php';

    $calcOutput = $_POST['calc'];
    $args = explode(" ", $calcOutput);
    $firstNumber = floatval($args[0]);
    $secondNumber = floatval($args[2]);
    $operator = $args[1];

    $answer = new Calculator($firstNumber, $secondNumber, $operator);
    try {
        $answerPush = $answer->calculate();
        echo json_encode($answerPush);
    }
    catch (Error $e) {
        echo $e;
    }