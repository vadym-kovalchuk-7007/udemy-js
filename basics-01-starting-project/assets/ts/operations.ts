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
    default:
      return;
  }
  currentResult = roundResult();
  const messageObj: messageObject = {
    operator: operator,
    prevResult: prevResult,
    userInput: userInp,
    message: message,
    currentResult: currentResult,
  };
  const additionalMessage: string = getMessage(messageObj);
  historyOfOperations.push(messageObj);
  outputResult(currentResult.toString(), additionalMessage);
  console.log(historyOfOperations);
}

/**
 * Get and check user input.
 */
function getUserInput(): number {
  return userInput ? parseFloat(userInput.value) : 0;
}

/**
 * Combine message for user.
 * @param messageObj messageObject
 */
function getMessage(messageObj: messageObject): string {
  return `${messageObj.prevResult} ${messageObj.operator} ${messageObj.userInput} ${messageObj.message}`;
}

function roundResult(prescision: number = 1): number {
  return parseFloat(currentResult.toFixed(prescision));
}
