let currentResult: number = 0;
type messageObject = {
  operator: string;
  prevResult: number;
  userInput: number;
  message: string;
  currentResult: number;
};
let historyOfOperations: messageObject[] = [];

/**
 * Add operation.
 */
function add(message: string): void {
  operations("+", message);
}
/**
 * Substract operation.
 */
function substract(message: string): void {
  operations("-", message);
}
/* Event listeners */
addBtn?.addEventListener("click", add.bind(this, "Adding"));
subtractBtn?.addEventListener("click", substract.bind(this, "Substracting"));
divideBtn?.addEventListener("click", () => operations("/")); //weak memory
multiplyBtn?.addEventListener("click", operations.bind(this, "*", "multiply"));
