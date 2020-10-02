"use strict";
var Elements;
(function (Elements) {
    Elements["rock"] = "ROCK";
    Elements["paper"] = "PAPER";
    Elements["scissors"] = "SCISSORS";
})(Elements || (Elements = {}));
var messages;
(function (messages) {
    messages["userWon"] = "User won";
    messages["computerWon"] = "Computer won";
    messages["draw"] = "Draw";
    messages["prompt"] = "Please choose one of: ";
})(messages || (messages = {}));
var valuesOfElements = function () {
    var arr = [];
    for (var elem in Elements) {
        arr.push(Elements[elem]);
    }
    return arr;
};
var randomKeyOfElements = function () {
    var objKeysArr = Object.keys(Elements);
    var randomKeyIndex = Math.floor(Math.random() * objKeysArr.length);
    return objKeysArr[randomKeyIndex];
};
var textResult = document.getElementById("result");
var Game = (function () {
    function Game() {
        this.userInput = "";
        this.defaultComputerChoice = "";
        this.defaultUserChoice = Elements.paper;
    }
    Game.prototype.getRandomCompChoice = function () {
        return Elements[randomKeyOfElements()];
    };
    Game.prototype.getAndCheckUserInput = function () {
        var userPrompt = prompt(this.makeMessage4prompt(), this.defaultUserChoice);
        return userPrompt &&
            valuesOfElements().indexOf(userPrompt.toUpperCase()) >= 0
            ? userPrompt.toUpperCase()
            : this.defaultUserChoice;
    };
    Game.prototype.makeMessage4prompt = function () {
        return messages.prompt + valuesOfElements();
    };
    Game.prototype.start = function () {
        this.userInput = this.getAndCheckUserInput();
        this.defaultComputerChoice = this.getRandomCompChoice();
        textResult.innerHTML = "Your choice " + this.userInput + ",<br>Computer choice " + this.defaultComputerChoice;
    };
    Game.prototype.findWinner = function () {
        var message = messages.draw;
        switch (this.userInput) {
            case Elements.paper:
                if (this.defaultComputerChoice === Elements.rock) {
                    message = messages.userWon;
                }
                if (this.defaultComputerChoice === Elements.scissors) {
                    message = messages.computerWon;
                }
                break;
            case Elements.rock:
                if (this.defaultComputerChoice === Elements.paper ||
                    this.defaultComputerChoice === Elements.scissors) {
                    message = messages.userWon;
                }
                break;
            case Elements.scissors:
                if (this.defaultComputerChoice === Elements.rock) {
                    message = messages.computerWon;
                }
                if (this.defaultComputerChoice === Elements.paper) {
                    message = messages.userWon;
                }
                break;
        }
        return message;
    };
    return Game;
}());
var game = new Game();
function start() {
    game.start();
}
var startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", start);
var checkWinnerBtn = document.getElementById("check-winner-btn");
function getWinner() {
    textResult.innerHTML = game.findWinner();
}
checkWinnerBtn.addEventListener("click", getWinner);
