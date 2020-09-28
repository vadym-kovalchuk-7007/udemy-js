"use strict";
console.log("Hello from TS");
var currentResult = 0;
function add() {
    if (userInput) {
        currentResult += parseInt(userInput.value);
    }
}
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", function () {
    console.log(userInput.value);
    console.log(currentResult);
});
outputResult(currentResult.toString(), "Current result");
