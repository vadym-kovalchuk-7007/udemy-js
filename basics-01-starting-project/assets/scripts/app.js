"use strict";
var currentResult = 0;
function operations(operator) {
    var userInp = getUserInput();
    var prevResult = currentResult;
    switch (operator) {
        case "+":
            currentResult += userInp;
            break;
        case "-":
            currentResult -= userInp;
            break;
        case "*":
            currentResult *= userInp;
            break;
        case "/":
            currentResult /= userInp;
            break;
    }
    var message = getMessage(operator, prevResult, userInp, "My message");
    outputResult(currentResult.toString(), message);
}
function getUserInput() {
    return userInput ? parseInt(userInput.value) : 0;
}
function getMessage(operator, prevResult, userInp, message) {
    if (message === void 0) { message = ""; }
    return prevResult + " " + operator + " " + userInp + " " + message;
}
function add() {
    operations("+");
}
function substract() {
    operations("-");
}
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", add);
subtractBtn === null || subtractBtn === void 0 ? void 0 : subtractBtn.addEventListener("click", substract);
divideBtn === null || divideBtn === void 0 ? void 0 : divideBtn.addEventListener("click", function () { return operations("/"); });
multiplyBtn === null || multiplyBtn === void 0 ? void 0 : multiplyBtn.addEventListener("click", function () { return operations("*"); });
