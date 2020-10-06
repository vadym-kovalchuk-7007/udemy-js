import { Elements, messages, randomKeyOfElements, textResult, valuesOfElements, } from "./variables.js";
export class Game {
    constructor() {
        this.userInput = "";
        this.defaultComputerChoice = "";
        this.defaultUserChoice = Elements.paper;
    }
    getRandomCompChoice() {
        return Elements[randomKeyOfElements()];
    }
    getAndCheckUserInput() {
        let userPrompt = prompt(this.makeMessage4prompt(), this.defaultUserChoice);
        return userPrompt &&
            valuesOfElements().indexOf(userPrompt.toUpperCase()) >= 0
            ? userPrompt.toUpperCase()
            : this.defaultUserChoice;
    }
    makeMessage4prompt() {
        return messages.prompt + valuesOfElements();
    }
    start() {
        this.userInput = this.getAndCheckUserInput();
        this.defaultComputerChoice = this.getRandomCompChoice();
        textResult.innerHTML = `Your choice ${this.userInput},<br>Computer choice ${this.defaultComputerChoice}`;
    }
    findWinner() {
        let message = messages.draw;
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
    }
}
