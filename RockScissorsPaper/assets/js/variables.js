export var Elements;
(function (Elements) {
    Elements["rock"] = "ROCK";
    Elements["paper"] = "PAPER";
    Elements["scissors"] = "SCISSORS";
})(Elements || (Elements = {}));
export var messages;
(function (messages) {
    messages["userWon"] = "User won";
    messages["computerWon"] = "Computer won";
    messages["draw"] = "Draw";
    messages["prompt"] = "Please choose one of: ";
})(messages || (messages = {}));
export const textResult = document.getElementById("result");
export const valuesOfElements = () => {
    let arr = [];
    for (const elem in Elements) {
        arr.push(Elements[elem]);
    }
    return arr;
};
export const randomKeyOfElements = () => {
    const objKeysArr = Object.keys(Elements);
    const randomKeyIndex = Math.floor(Math.random() * objKeysArr.length);
    return objKeysArr[randomKeyIndex];
};
