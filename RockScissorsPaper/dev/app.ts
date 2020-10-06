import { Game } from "./classes.js";
import { textResult } from "./variables.js";
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
