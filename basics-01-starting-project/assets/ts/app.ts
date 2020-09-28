let currentResult: number = 0;

/**
 * All operators in one place.
 * @param operator Divide, substract, etc.
 */
function operations(operator: string, message: string = ""): void {
  const userInp: number = getUserInput();
  const prevResult: number = currentResult;
  switch (operator) {
    case "+":
      currentResult += userInp;
      break;
    case "-":
      currentResult -= userInp;
      break;
    case "*":
      currentResult *= userInp;
      break;
    case "/":
      currentResult /= userInp;
      break;
  }
  const additionalMessage: string = getMessage(
    operator,
    prevResult,
    userInp,
    message
  );
  outputResult(currentResult.toString(), additionalMessage);
}

/**
 * Get and check user input.
 */
function getUserInput(): number {
  return userInput ? parseInt(userInput.value) : 0;
}

/**
 * Combine message for user.
 *
 * @param operator
 * @param prevResult
 * @param userInp
 * @param message
 */
function getMessage(
  operator: string,
  prevResult: number,
  userInp: number,
  message: string
): string {
  return `${prevResult} ${operator} ${userInp} ${message}`;
}

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
