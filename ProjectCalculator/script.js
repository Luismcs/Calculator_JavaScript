let operation = "";
let result = 0;
let first = true;

let calcDisplay = document.getElementById('calcDisplay');
let resultDisplay = document.getElementById('resultDisplay');

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
buttonClear.addEventListener('click', function() {
    result = 0;
    first=true;
    operation = "";
    calcDisplay.innerHTML = "";
    resultDisplay.innerHTML = "";


});

//Buttons Functions

buttonDot.addEventListener('click', function() { //adds a dot

    if(verifiesDot()){ //if the screen has just a "." then nothing happens
        return;
    }
    
    calcDisplay.innerHTML += ".";
});

buttonOne.addEventListener('click', function() { //adds a 1
    addOperator();

    verifiesClear();
    calcDisplay.innerHTML += "1";
});

buttonTwo.addEventListener('click', function() { //adds a 2
    addOperator();

    verifiesClear();

    calcDisplay.innerHTML += "2";
});

buttonThree.addEventListener('click', function() { //adds a 3
    addOperator();

    verifiesClear();

    calcDisplay.innerHTML += "3";
});

buttonFour.addEventListener('click', function() { //adds a 4
    addOperator();

    verifiesClear();

    calcDisplay.innerHTML += "4";
});

buttonFive.addEventListener('click', function() { //adds a 5
    addOperator();

    verifiesClear();

    calcDisplay.innerHTML += "5";
});

buttonSix.addEventListener('click', function() { //adds a 6
    addOperator();

    verifiesClear();

    calcDisplay.innerHTML += "6";
});

buttonSeven.addEventListener('click', function() { //adds a 7
    addOperator();

    verifiesClear();

    calcDisplay.innerHTML += "7";
});

buttonEight.addEventListener('click', function() { //adds a 8
    addOperator();

    verifiesClear();

    calcDisplay.innerHTML += "8";
});

buttonNine.addEventListener('click', function() { //adds a 9
    addOperator();

    verifiesClear();

    calcDisplay.innerHTML += "9";
});

buttonZero.addEventListener('click', function() { //adds a 0
    addOperator();

    verifiesClear();

    calcDisplay.innerHTML += "0";
});

//Equal Button
buttonEqual.addEventListener('click', function() {

    resultDisplay.innerHTML="";

    if(verifiesNan()){
        calcDisplay.innerHTML = "Error";
        return;
    }

    if(verifiesInputOperation()){
        calcDisplay.innerHTML = result;
        return;
    }


    //Depending on the last operation saved executes the corresponding operations
    if(operation == "+"){

        result = result + parseFloat (calcDisplay.innerHTML);
        calcDisplay.innerHTML = result;

    }
    else if(operation == "-"){

        result = result - parseFloat (calcDisplay.innerHTML);
        calcDisplay.innerHTML = result;

    }
    else if(operation == "/"){

        result = result / parseFloat (calcDisplay.innerHTML);
        calcDisplay.innerHTML = result;

    }
    else if(operation == "*"){

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

function verifiesNan(){
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

    //if it's the first input, adds the value inputted to the result
    if(first){

        result += parseFloat (calcDisplay.innerHTML);
        first = false;

    }
    else{
        result=lastOperation(resultDisplay,calcDisplay);
    }



    calcDisplay.innerHTML = '+';
    resultDisplay.innerHTML = result;


});

buttonSub.addEventListener('click', function() {

    //Saves the operation clicked
    operation = "-";

    //if it's the first input, adds the value inputted to the result
    if(first){

        result = result - parseFloat (calcDisplay.innerHTML);
        first = false;
    }
    else{
        result=lastOperation(resultDisplay,calcDisplay);
    }

    calcDisplay.innerHTML = '-';
    resultDisplay.innerHTML = result;

});

buttonMultiply.addEventListener('click', function() {

    //Saves the operation clicked
    operation = "*";

    //if it's the first input, adds the value inputted to the result
    if(first){
        result = result + parseFloat (calcDisplay.innerHTML);
        first = false;
    }
    else{
        result=lastOperation(resultDisplay,calcDisplay);
    }

    calcDisplay.innerHTML = '*';
    resultDisplay.innerHTML = result;

});

buttonDivide.addEventListener('click', function() {

    //Saves the operation clicked
    operation = "/";

    //if it's the first input, adds the value inputted to the result
    if(first){
        result = result + parseFloat (calcDisplay.innerHTML);
        first = false;
    }
    else{
        result=lastOperation(resultDisplay,calcDisplay);
    }

    calcDisplay.innerHTML = '/';
    resultDisplay.innerHTML = result;

});

function lastOperation(resultDisplay, calcDisplay) {
    // Assuming resultDisplay and calcDisplay are HTML elements
    if (resultDisplay.innerHTML.charAt(resultDisplay.innerHTML.length - 1) == "+") {
        result = parseFloat(result) + parseFloat(calcDisplay.innerHTML);
    }
    else if (resultDisplay.innerHTML.charAt(resultDisplay.innerHTML.length - 1) == "-") {
        result = parseFloat(result) - parseFloat(calcDisplay.innerHTML);
    }
    else if (resultDisplay.innerHTML.charAt(resultDisplay.innerHTML.length - 1) == "*") {
        result = parseFloat(result) * parseFloat(calcDisplay.innerHTML);
    }
    else if (resultDisplay.innerHTML.charAt(resultDisplay.innerHTML.length - 1) == "/") {
        result = parseFloat(result) / parseFloat(calcDisplay.innerHTML);
    }
    return result; // Returning the calculated result
}

