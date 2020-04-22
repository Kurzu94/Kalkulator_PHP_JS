<?php
    session_start();
    include 'calculator.class.php';

    $firstNumber = $_POST['firstNumber'];
    $secondNumber = $_POST['secondNumber'];
    $operator = $_POST['operator'];


    $answer = new Calculator($firstNumber, $secondNumber, $operator);
    try {
        echo $answer->calculate();
    }
    catch (Error $e) {
        echo $e;
    }