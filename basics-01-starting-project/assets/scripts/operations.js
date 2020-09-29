"use strict";
function operations(operator, message) {
    if (message === void 0) { message = ""; }
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
        default:
            return;
    }
    currentResult = roundResult();
    var messageObj = {
        operator: operator,
        prevResult: prevResult,
        userInput: userInp,
        message: message,
        currentResult: currentResult,
    };
    var additionalMessage = getMessage(messageObj);
    historyOfOperations.push(messageObj);
    outputResult(currentResult.toString(), additionalMessage);
    console.log(historyOfOperations);
}
function getUserInput() {
    return userInput ? parseFloat(userInput.value) : 0;
}
function getMessage(messageObj) {
    return messageObj.prevResult + " " + messageObj.operator + " " + messageObj.userInput + " " + messageObj.message;
}
function roundResult(prescision) {
    if (prescision === void 0) { prescision = 1; }
    return parseFloat(currentResult.toFixed(prescision));
}
