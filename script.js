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

            currentNumber = parseInt(DISPLAY.textContent);
            console.log(currentNumber)

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

            
            storedNumber = parseInt(DISPLAY.textContent) - storedNumber;

            DISPLAY.textContent = "0";

            currentOperator = "subtract";

    }

    subtract.addEventListener("click", () => {

         subtractNumbers();

    });

    function multiplyNumbers() {
        
        if(storedNumber) {

        storedNumber *= parseInt(DISPLAY.textContent);

        DISPLAY.textContent = "0";

        currentOperator = "multiply";
        } else {
            storedNumber = parseInt(DISPLAY.textContent);
            DISPLAY.textContent = "0";
            currentOperator = "multiply";
        }
    }

    multiply.addEventListener("click", () => {

        multiplyNumbers();

    });

    function divideNumbers() {


        if(storedNumber) {

            storedNumber /= parseInt(DISPLAY.textContent);

            DISPLAY.textContent = "0";

            currentOperator = "divide";
        } else {
            storedNumber = parseInt(DISPLAY.textContent);
            DISPLAY.textContent = "0";
            currentOperator = "divide";
        }
    }

    divide.addEventListener("click", () => {

        divideNumbers();

    })

    function displayFinalResult() {
        console.log(storedNumber);
        DISPLAY.textContent = `${operate(currentOperator, storedNumber, parseInt(DISPLAY.textContent))}`;
        storedNumber = 0;
    }

    equals.addEventListener("click" , () => {
        
        displayFinalResult();

    })

}

function createFloatButton() {

    const floatButton = document.querySelector(".float");


    floatButton.addEventListener("click", () => {
        DISPLAY.textContent += ".";
    })
}

function createClearButton() {
    const clearButton = document.querySelector("#clear");

    clearButton.addEventListener("click", () => {
        DISPLAY.textContent = 0;
        currentNumber = 0;
        storedNumber = 0;
    })
}

createClearButton();
createFloatButton();
createOperatorButtons();
createNumberButtons();