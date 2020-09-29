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
function add(): void {
  operations("+");
}
/**
 * Substract operation.
 */
function substract(): void {
  operations("-");
}
/* Event listeners */
addBtn?.addEventListener("click", add);
subtractBtn?.addEventListener("click", substract);
divideBtn?.addEventListener("click", () => operations("/"));
multiplyBtn?.addEventListener("click", () => operations("*"));
