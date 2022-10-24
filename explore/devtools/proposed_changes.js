// part1.js

function printSum() {
    debugger
    let num1 = parseFloat(document.getElementById("num1").value); // parse value as float
    let num2 = parseFloat(document.getElementById("num2").value); // parse value as float
    document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
}

function calculateSum(num1, num2) {
    let result = num1 + num2 // calculate numerical sum, which works since both arguments are Numerical
    return result
}

function init() {
    document.getElementById('printSum').addEventListener('click', printSum);
}

window.addEventListener('DOMContentLoaded', init);