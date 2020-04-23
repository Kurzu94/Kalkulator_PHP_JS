<?php
    include 'calculator.class.php';

    $firstNumber = $_POST['firstNumber'];
    $secondNumber = $_POST['secondNumber'];
    $operator = $_POST['operator'];


    $answer = new Calculator($firstNumber, $secondNumber, $operator);
    $answer->setErrorMessage("Niemożliwe");
    try {
        $answerPush = $answer->calculate();
        echo json_encode($answerPush);
    }
    catch (Error $e) {
        echo $e;
    }