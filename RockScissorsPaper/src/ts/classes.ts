import {
  Elements,
  randomKeyOfElements,
  textResult,
  valuesOfElements,
} from "./variables";

import { messages } from "./messages";

import type { keyOfElements } from "./variables";
import { Gaming } from "./interfaces.dev";
export class Game implements Gaming {
  userInput = "";
  defaultComputerChoice = "";
  defaultUserChoice = Elements.paper;

  constructor() {}

  /**
   * Getting random computer choice.
   */
  getRandomCompChoice() {
    return Elements[randomKeyOfElements() as keyOfElements];
  }

  /**
   * Getting and check user input.
   */
  getAndCheckUserInput(): string {
    const userPrompt: string | null = prompt(
      this.makeMessage4prompt(),
      this.defaultUserChoice
    );

    return userPrompt &&
      valuesOfElements().indexOf(userPrompt.toUpperCase()) >= 0 // valuesOfElements.includes(userPrompt)
      ? userPrompt.toUpperCase()
      : this.defaultUserChoice;
  }

  /**
   * Creating message for user prompt.
   */
  makeMessage4prompt(): string {
    return "Please choose one of: " + valuesOfElements();
  }

  /**
   * Start the game.
   */
  start() {
    this.userInput = this.getAndCheckUserInput();
    this.defaultComputerChoice = this.getRandomCompChoice();
    textResult.innerHTML = `Your choice ${this.userInput},<br>Computer choice ${this.defaultComputerChoice}`;
  }

  /**
   * Check values for getting winner.
   */
  findWinner(): string {
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
        if (
          this.defaultComputerChoice === Elements.paper ||
          this.defaultComputerChoice === Elements.scissors
        ) {
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
