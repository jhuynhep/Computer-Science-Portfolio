// These variables save the different elements from the calculator
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

// This is the action to sees if the user clicks
button.addEventListener("click", doMath);

// This function performs the different operations on the calculator
function doMath() {
    // This will add the two inputs
    if (dropdown.value == "+") {
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    // This will subtract the two inputs
    if (dropdown.value == "-") {
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    // This will multiply the two inputs
    if (dropdown.value == "x") {
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    // This will divide the two inputs
    if (dropdown.value == "/") {
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    // This will raise the first input to the power
    if (dropdown.value == "^") {
        answer = Math.pow(parseInt(input1.value), parseInt(input2.value));
        display.innerHTML = answer;
    }
    // This will see if the first number is less than the second number
    if (dropdown.value == "<") {
        if (input1.value < input2.value) {
            display.innerHTML = "true";
        }
        else {
            display.innerHTML = "false";
        }
    }
    // This will see if the first number is greater than the second number
    if (dropdown.value == ">") {
        if (input1.value > input2.value) {
            display.innerHTML = "true";
        }
        else {
            display.innerHTML = "false";
        }
    }
}