<?php declare(strict_types=1);

class Calculator {
    private $firstNumber;
    private $secondNumber;
    private $operator;
    private $message;

    /**
     * Calculator constructor.
     * @param float $firstNumber
     * @param float $secondNumber
     * @param string $operator
     */
    public function __construct(float $firstNumber, float $secondNumber, string $operator)
    {
        $this->firstNumber = $firstNumber;
        $this->secondNumber = $secondNumber;
        $this->operator = $operator;
    }

    /**
     * @return float
     */

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