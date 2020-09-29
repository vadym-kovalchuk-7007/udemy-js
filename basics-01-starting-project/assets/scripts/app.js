"use strict";
var currentResult = 0;
var historyOfOperations = [];
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
