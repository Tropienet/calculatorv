const DISPLAY = document.querySelector("#display");

let currentNumber = parseFloat(DISPLAY.textContent);
let storedNumber = parseFloat(DISPLAY.textContent);
let currentOperator = 0;

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

        if( currentNumber) {
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

            currentNumber = parseFloat(DISPLAY.textContent);
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

    function checkForCurrentOperator (newOperator) {

        function changeOperator () { 
                storedNumber= operate(currentOperator, storedNumber, currentNumber);
                DISPLAY.textContent = `${storedNumber}`;
                currentNumber = 0;
                currentOperator = newOperator;
        }

        function updateOperator() {
            
                storedNumber = currentNumber;
                currentNumber = 0;
                currentOperator = newOperator;
                console.log("The default works");
        }

        currentOperator ? changeOperator() : updateOperator(); //Updated solution (change updateOperator function name to something more descriptive)

        /* First solution 
        switch (currentOperator)  {
            case "add":
                changeOperator();
                break;
            case "subtract":
                changeOperator();
                break;
            case "multiply":
                changeOperator();
                break;
            case "divide":
                changeOperator();
                break;
            default:
                storedNumber = currentNumber;
                currentNumber = 0;
                currentOperator = newOperator;
                console.log("The default works");
        } */


    }

    function addNumbers() {

        checkForCurrentOperator( "add");

    }

    add.addEventListener("click" , () =>  {

        addNumbers();

    });

    function subtractNumbers() {

            
           checkForCurrentOperator("subtract");

    }

    subtract.addEventListener("click", () => {

         subtractNumbers();

    });

    function multiplyNumbers() {
        
       checkForCurrentOperator("multiply");

    }

    multiply.addEventListener("click", () => {

        multiplyNumbers();

    });

    function divideNumbers() {

        checkForCurrentOperator("divide")
     
    }

    divide.addEventListener("click", () => {

        divideNumbers();

    })

    function displayFinalResult() {
        console.log(storedNumber);
        DISPLAY.textContent = `${operate(currentOperator, storedNumber, parseFloat(DISPLAY.textContent))}`;
        currentNumber = 0;
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