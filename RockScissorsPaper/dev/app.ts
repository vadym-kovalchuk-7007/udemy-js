enum Elements {
  rock = "ROCK",
  paper = "PAPER",
  scissors = "SCISSORS",
}
/**
 * Values of enum Elements.
 */
const valuesOfElements = () => {
  let arr: string[] = [];
  for (const elem in Elements) {
    arr.push(Elements[elem as keyof typeof Elements]);
  }
  return arr;
};
/**
 * Getting random key from Elements.
 */
const randomKeyOfElements = () => {
  const objKeysArr = Object.keys(Elements);
  const randomKeyIndex = Math.floor(Math.random() * objKeysArr.length);
  return objKeysArr[randomKeyIndex];
};

const textResult = document.getElementById("result") as HTMLElement;

interface Gaming {
  userInput: string | Elements;
  defaultComputerChoice: string | Elements;
  defaultUserChoice: string | Elements;
  getAndCheckUserInput(): string;
  start(): void;
  makeMessage4prompt(): string;
  findWinner(): void;
  getRandomCompChoice(): string;
}

class Game implements Gaming {
  userInput = "";
  defaultComputerChoice = "";
  defaultUserChoice = Elements.paper;
  private messageUserWon = "User won";
  private messageComputerWon = "Computer won";
  private messageDraw = "Draw";

  constructor() {}

  /**
   * Getting random computer choice.
   */
  getRandomCompChoice() {
    return Elements[randomKeyOfElements() as keyof typeof Elements];
  }

  /**
   * Getting and check user input.
   */
  getAndCheckUserInput(): string {
    let userPrompt: string | null = prompt(
      this.makeMessage4prompt(),
      this.defaultUserChoice
    );

    return userPrompt &&
      valuesOfElements().indexOf(userPrompt.toUpperCase()) >= 0 //valuesOfElements.includes(userPrompt)
      ? userPrompt.toUpperCase()
      : this.defaultUserChoice;
  }

  /**
   * Creating message for user prompt.
   */
  makeMessage4prompt(): string {
    return "Please, choose one of: " + valuesOfElements();
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
    let message = this.messageDraw;
    switch (this.userInput) {
      case Elements.paper:
        if (
          this.defaultComputerChoice === Elements.rock ||
          this.defaultComputerChoice === Elements.scissors
        ) {
          message = this.messageComputerWon;
        }
        break;
      case Elements.rock:
        if (
          this.defaultComputerChoice === Elements.paper ||
          this.defaultComputerChoice === Elements.scissors
        ) {
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
  }
}

let game = new Game();
/**
 * Wrapper for start method.
 */
function start(): void {
  game.start();
}
const startBtn = document.getElementById("start-btn") as HTMLElement;
startBtn.addEventListener("click", start);
const checkWinnerBtn = document.getElementById(
  "check-winner-btn"
) as HTMLElement;

/**
 * Wrapper for find winner method.
 */
function getWinner(): void {
  textResult.innerHTML = game.findWinner();
}
checkWinnerBtn.addEventListener("click", getWinner);
