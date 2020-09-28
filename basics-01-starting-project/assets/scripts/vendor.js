"use strict";
var userInput = document.getElementById("input-number");
var addBtn = document.getElementById("btn-add");
var subtractBtn = document.getElementById("btn-subtract");
var multiplyBtn = document.getElementById("btn-multiply");
var divideBtn = document.getElementById("btn-divide");
var currentResultOutput = document.getElementById("current-result");
var currentCalculationOutput = document.getElementById("current-calculation");
function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}
