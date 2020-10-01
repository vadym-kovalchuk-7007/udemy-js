"use strict";
var Elements;
(function (Elements) {
    Elements["rock"] = "ROCK";
    Elements["paper"] = "PAPER";
    Elements["scissors"] = "SCISSORS";
})(Elements || (Elements = {}));
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
        this.messageUserWon = "User won";
        this.messageComputerWon = "Computer won";
        this.messageDraw = "Draw";
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
        return "Please, choose one of: " + valuesOfElements();
    };
    Game.prototype.start = function () {
        this.userInput = this.getAndCheckUserInput();
        this.defaultComputerChoice = this.getRandomCompChoice();
        textResult.innerHTML = "Your choice " + this.userInput + ",<br>Computer choice " + this.defaultComputerChoice;
    };
    Game.prototype.findWinner = function () {
        var message = this.messageDraw;
        switch (this.userInput) {
            case Elements.paper:
                if (this.defaultComputerChoice === Elements.rock ||
                    this.defaultComputerChoice === Elements.scissors) {
                    message = this.messageComputerWon;
                }
                break;
            case Elements.rock:
                if (this.defaultComputerChoice === Elements.paper ||
                    this.defaultComputerChoice === Elements.scissors) {
                    message = this.messageUserWon;
                }
                break;
            case Elements.scissors:
                if (this.defaultComputerChoice === Elements.rock) {
                    message = this.messageComputerWon;
                }
                if (this.defaultComputerChoice === Elements.paper) {
                    message = this.messageUserWon;
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
