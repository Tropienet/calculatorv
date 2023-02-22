

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
