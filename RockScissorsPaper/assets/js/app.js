import { Game } from "./classes.js";
import { textResult } from "./variables.js";
let game = new Game();
function start() {
    game.start();
}
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", start);
const checkWinnerBtn = document.getElementById("check-winner-btn");
function getWinner() {
    textResult.innerHTML = game.findWinner();
}
checkWinnerBtn.addEventListener("click", getWinner);
