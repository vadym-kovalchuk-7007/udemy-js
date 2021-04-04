"use strict";
const arr = [5, 2, 3, 6, 7, 10];
//filter more than 5//
const arrMoreThan = arr.filter((elem) => elem > 5);
//map to object//
const arrMap = arr.map((elem) => ({ num: elem }));
// arr reduce //
const sum = arr.reduce((sum, elem) => (sum += elem), 0);
// FindMax //
function findMax(...values) {
    let maxNumber = 0;
    let minNumber = values[0];
    for (const val of values) {
        if (val > maxNumber) {
            maxNumber = val;
        }
        else if (val <= minNumber) {
            minNumber = val;
        }
    }
    return [minNumber, maxNumber];
}
const maxInArr = findMax(...arr);
const maxInSpeated = findMax(...arr.slice(0, 3), ...arr.slice(3, 5));
console.log(maxInSpeated); // print 7, because arr[4] is 7
const [minNumber, maxNumber] = maxInSpeated;
//No duplicates
const add2Arr = (arr, newValue) => {
    if (arr.indexOf(newValue) < 0) {
        arr.push(newValue);
    }
};
