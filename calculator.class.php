<?php declare(strict_types=1);

class Calculator {
    private $firstNumber;
    private $secondNumber;
    private $operator;
    private $message;

    /**
     * Calculator constructor.
     * @param int $firstNumber
     * @param int $secondNumber
     * @param string $operator
     */
    public function __construct(int $firstNumber, int $secondNumber, string $operator)
    {
        $this->firstNumber = $firstNumber;
        $this->secondNumber = $secondNumber;
        $this->operator = $operator;
    }

    /**
     * @param string $message
     * @return float
     */
    public function setErrorMessage(string $message){
        $this->message = $message;
        return $this->message;
    }

    public function calculate(): float
    {
        switch($this->operator) {
            case '+':
                return $this->firstNumber + $this->secondNumber;
                break;
            case '-':
                return $this->firstNumber - $this->secondNumber;
                break;
            case '*':
                return $this->firstNumber * $this->secondNumber;
                break;
            case '/':
                return $this->firstNumber / $this->secondNumber;
                break;
            default:
                break;
        }
    }
}