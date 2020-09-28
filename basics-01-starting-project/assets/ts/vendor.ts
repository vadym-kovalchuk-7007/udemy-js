const userInput = document.getElementById("input-number") as HTMLInputElement;
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result")!;
const currentCalculationOutput = document.getElementById(
  "current-calculation"
)!;

function outputResult(result: string | null, text: string) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
