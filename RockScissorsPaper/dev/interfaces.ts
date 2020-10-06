import { Elements } from "./variables.js";
export interface Gaming {
  userInput: string | Elements;
  defaultComputerChoice: string | Elements;
  defaultUserChoice: string | Elements;
  getAndCheckUserInput(): string;
  start(): void;
  makeMessage4prompt(): string;
  findWinner(): void;
  getRandomCompChoice(): string;
}
