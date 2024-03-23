//Elements Definition

//Operation, Result , FirstInput
let operation = "";
let result = 0;
let first = true;

//Calculator Displays
let calcDisplay = document.getElementById('calcDisplay');
let resultDisplay = document.getElementById('resultDisplay');

//Button Elements
let buttonOne = document.getElementById('buttonOne');
let buttonTwo = document.getElementById('buttonTwo');
let buttonThree = document.getElementById('buttonThree');
let buttonFour = document.getElementById('buttonFour');
let buttonFive = document.getElementById('buttonFive');
let buttonSix = document.getElementById('buttonSix');
let buttonSeven = document.getElementById('buttonSeven');
let buttonEight = document.getElementById('buttonEight');
let buttonNine = document.getElementById('buttonNine');
let buttonZero = document.getElementById('buttonZero');
let buttonDot = document.getElementById('buttonDot');
let buttonClear = document.getElementById('buttonClear');
let buttonEqual = document.getElementById('buttonEqual');
let buttonAdd = document.getElementById('buttonAdd');
let buttonSub = document.getElementById('buttonSub');
let buttonDivide = document.getElementById('buttonDivide');
let buttonMultiply = document.getElementById('buttonMultiply');

//Clears the calculator

//Clear Button Event
buttonClear.addEventListener('click', function() { //Clears the screen and resets the result

    result = 0;
    first=true;
    operation = "";
    calcDisplay.innerHTML = "";
    resultDisplay.innerHTML = "";

});

//Buttons Functions

buttonDot.addEventListener('click', function() { //adds a dot

    if(verifiesMultipleDots()){
        return;
    }

    if(verifiesDot()){ //if the screen has just a "." then nothing happens
        return;
    }
    
    calcDisplay.innerHTML += ".";
});

function addDigit(number){  //display number clicked
    addOperator();

    verifiesClear();

    calcDisplay.innerHTML += number;
}

buttonOne.addEventListener('click', function() { //adds a 1
    addDigit("1");
});

buttonTwo.addEventListener('click', function() { //adds a 2
    addDigit("2");

});

buttonThree.addEventListener('click', function() { //adds a 3
    addDigit("3");

});

buttonFour.addEventListener('click', function() { //adds a 4
    addDigit("4");

});

buttonFive.addEventListener('click', function() { //adds a 5
    addDigit("5");

});

buttonSix.addEventListener('click', function() { //adds a 6
    addDigit("6");

});

buttonSeven.addEventListener('click', function() { //adds a 7
    addDigit("7");

});

buttonEight.addEventListener('click', function() { //adds a 8
    addDigit("8");

});

buttonNine.addEventListener('click', function() { //adds a 9
    addDigit("9");

});

buttonZero.addEventListener('click', function() { //adds a 0
    addDigit("0");

});

//Equal Button
buttonEqual.addEventListener('click', function() {

    resultDisplay.innerHTML="";

    //Verifies if the input is a number
    if(verifiesNan()){
        calcDisplay.innerHTML = "Error";
        return;
    }

    //Handles if the last input was an operator
    if(verifiesInputOperation()){
        calcDisplay.innerHTML = result;
        return;
    }


    //Depending on the last operation executes the calculus
    if(operation == "+"){   //Addition

        result = result + parseFloat (calcDisplay.innerHTML);
        calcDisplay.innerHTML = result;

    }
    else if(operation == "-"){ //Subtraction

        result = result - parseFloat (calcDisplay.innerHTML);
        calcDisplay.innerHTML = result;

    }
    else if(operation == "/"){  //Division

        result = result / parseFloat (calcDisplay.innerHTML);
        calcDisplay.innerHTML = result;

    }
    else if(operation == "*"){  //Multiply

        result = result * parseFloat (calcDisplay.innerHTML);
        calcDisplay.innerHTML = result;
    }

});

//Verifications and Validations

function verifiesDot(){     //verifies if the screens has just a "."

    if(calcDisplay.innerHTML == "."){
        return true;
    }
    return false

}

function verifiesClear(){   //If the last input was an operation then clears the calculator screen

    if (calcDisplay.innerHTML == "+"||
        calcDisplay.innerHTML == "-"||
        calcDisplay.innerHTML == "*"||
        calcDisplay.innerHTML == "/"){

        calcDisplay.innerHTML = "";

    }

}

function verifiesNan(){  //verifies if the result is a number

    //Verifies if first input is an operator
    if(first && calcDisplay.innerHTML == "+"
    ||calcDisplay.innerHTML == "-"
    ||calcDisplay.innerHTML == "/"
    ||calcDisplay.innerHTML == "*"){
        return true;
    }

    if(isNaN(result)){
        return true;
    }

    return false;
}


function verifiesInputOperation(){

    //if the last input was an operation then shows the result in the screen
    if(calcDisplay.innerHTML == '+'||
        calcDisplay.innerHTML == '-'||
        calcDisplay.innerHTML == '*'||
        calcDisplay.innerHTML == '/'){

        return true;    //if the last input was just an operator returns true

    }

    return false;       //if not, returns false

}

//Add Operation do ResultDisplay

function addOperator(){
    if(calcDisplay.innerHTML==="+"){
        resultDisplay.innerHTML += "+";
    }
    else if(calcDisplay.innerHTML==="-"){
        resultDisplay.innerHTML += "-";
    }
    else if(calcDisplay.innerHTML==="*"){
        resultDisplay.innerHTML += "*";
    }
    else if(calcDisplay.innerHTML==="/"){
        resultDisplay.innerHTML += "/";
    }
}


//Operations Buttons

buttonAdd.addEventListener('click', function() {

    //Saves the operation clicked
    operation = "+";

    if(verifiesFirstInputOperator("+")){
        return;
    }

    verifiesFirst();

    calcDisplay.innerHTML = '+';
    resultDisplay.innerHTML = result;


});

buttonSub.addEventListener('click', function() {

    //Saves the operation clicked
    operation = "-";

    if(verifiesFirstInputOperator("-")){
        return;
    }

    verifiesFirst();

    calcDisplay.innerHTML = '-';
    resultDisplay.innerHTML = result;

});

buttonMultiply.addEventListener('click', function() {

    //Saves the operation clicked
    operation = "*";

    if(verifiesFirstInputOperator("*")){
        return;
    }

    verifiesFirst();

    calcDisplay.innerHTML = '*';
    resultDisplay.innerHTML = result;

});

buttonDivide.addEventListener('click', function() {

    //Saves the operation clicked
    operation = "/";

    if(verifiesFirstInputOperator("/")){
        return;
    }

    verifiesFirst();

    calcDisplay.innerHTML = '/';
    resultDisplay.innerHTML = result;

});

function lastOperation(resultDisplay, calcDisplay) {    //Alows the user to make operations consecutively
    switch (resultDisplay.innerHTML.charAt(resultDisplay.innerHTML.length - 1)) {
        case "+":
            result = parseFloat(result) + parseFloat(calcDisplay.innerHTML);
            break;
        case "-":
            result = parseFloat(result) - parseFloat(calcDisplay.innerHTML);
            break;
        case "*":
            result = parseFloat(result) * parseFloat(calcDisplay.innerHTML);
            break;
        case "/":
            result = parseFloat(result) / parseFloat(calcDisplay.innerHTML);
            break;
        default:
            break;
    }
    return result; // Returns the calculated result
}

function verifiesMultipleDots(){

    let status = (calcDisplay.innerHTML.charAt(calcDisplay.innerHTML.length-1)) ? true : false;

    return status;

}

//Verifies if it's the first input
function verifiesFirst(){
    //if it's the first input, adds the value inputted to the result
    if(first){

        result = result + parseFloat (calcDisplay.innerHTML);
        first = false;
    }
    else
        result=lastOperation(resultDisplay,calcDisplay);
}

function verifiesFirstInputOperator(operator){
    if(calcDisplay.innerHTML.trim() === ""){
        resultDisplay.innerHTML="";
        if(operator=="+"){
            calcDisplay.innerHTML="+"
        }
        else if(operator=="-"){
            calcDisplay.innerHTML="-"
        }
        else if(operator=="*"){
            calcDisplay.innerHTML="*"
        }
        else if(operator=="/"){
            calcDisplay.innerHTML="/"
        }
        return true;
    }
    return false;
}

function changeLastOperator(operator){
    if(calcDisplay.innerHTML.endsWith("+") ||
        calcDisplay.innerHTML.endsWith("/") ||
        calcDisplay.innerHTML.endsWith("*") ||
        calcDisplay.innerHTML.endsWith("-")) {

        calcDisplay.innerHTML = calcDisplay.innerHTML.substring(0, calcDisplay.innerHTML.length - 1) + operator;
    }
}






