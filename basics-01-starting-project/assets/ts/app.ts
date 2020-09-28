console.log("Hello from TS");
let currentResult: number = 0;
function add(): void {
  if (userInput) {
    currentResult += parseInt(userInput.value);
  }
}
addBtn?.addEventListener("click", () => {
  console.log(userInput.value);
  console.log(currentResult);
});
outputResult(currentResult.toString(), "Current result");
