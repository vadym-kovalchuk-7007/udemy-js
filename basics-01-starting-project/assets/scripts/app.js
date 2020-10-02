"use strict";
var currentResult = 0;
var historyOfOperations = [];
function add(message) {
    operations("+", message);
}
function substract(message) {
    operations("-", message);
}
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", add.bind(this, "Adding"));
subtractBtn === null || subtractBtn === void 0 ? void 0 : subtractBtn.addEventListener("click", substract.bind(this, "Substracting"));
divideBtn === null || divideBtn === void 0 ? void 0 : divideBtn.addEventListener("click", function () { return operations("/"); });
multiplyBtn === null || multiplyBtn === void 0 ? void 0 : multiplyBtn.addEventListener("click", operations.bind(this, "*", "multiply"));
