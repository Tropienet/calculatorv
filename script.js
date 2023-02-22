const DISPLAY = document.querySelector("#display");

let currentNumber = parseInt(DISPLAY.textContent);
let storedNumber = parseInt(DISPLAY.textContent);
let currentOperator = "";

let calculator = {

    add: function add( a, b ) {
        return a+b;
    },
    subtract: function subtract( a, b ) {
        return a - b;
    },
    multiply: function multiply ( a , b) {
        return a * b;
    },
    divide: function divide ( a , b ) {
        return a / b;
    },

}

function operate( operator, number1, number2 ) {
    
    return calculator[`${operator}`]( number1, number2) ;

}

function createNumberButtons () {

    const numbers = document.querySelectorAll(".number")

    function checkForZero() {

        if( parseInt(DISPLAY.textContent)) {
            return true;
        }

        return false;

    }

    numbers.forEach(number => {

        number.addEventListener("click", () => {

            if(checkForZero()) {
                DISPLAY.textContent += number.textContent;
            }else{
                DISPLAY.textContent = number.textContent
            }

        });
        
    });

}

function createOperatorButtons() {

    const add = document.querySelector(".add");
    const subtract = document.querySelector(".subtract");
    const multiply = document.querySelector(".multiply");
    const divide = document.querySelector(".divide");
    const equals = document.querySelector(".equals");

    function addNumbers() {

        storedNumber += parseInt(DISPLAY.textContent);

        DISPLAY.textContent = "0";

        currentOperator = "add";

    }

    add.addEventListener("click" , () =>  {

        addNumbers();

    });

    function subtractNumbers() {

        storedNumber -= parseInt(DISPLAY.textContent);

        DISPLAY.textContent = "0";

        currentOperator = "subtract";
        
    }

    subtract.addEventListener("click", () => {

         subtractNumbers();

    });

    function multiplyNumbers() {

        storedNumber *= parseInt(DISPLAY.textContent);

        DISPLAY.textContent = "0";

        currentOperator = "multiply";
    }

    multiply.addEventListener("click", () => {

        multiplyNumbers();

    });

    function divideNumbers() {

        storedNumber /= parseInt(DISPLAY.textContent);

        DISPLAY.textContent = "0";

        currentOperator = "divide";

    }

    divide.addEventListener("click", () => {

        divideNumbers();

    })

    function displayFinalResult() {

        DISPLAY.textContent = `${operate(currentOperator, storedNumber, parseInt(DISPLAY.textContent))}`;
        storedNumber = 0;
    }

    equals.addEventListener("click" , () => {
        
        displayFinalResult();

    })

}


createOperatorButtons();
createNumberButtons();