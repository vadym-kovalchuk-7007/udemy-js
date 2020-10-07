export const generateText = (name: string, age: string) => {
  // Returns output text
  return `${name} (${age} years old)`;
};

export const createElement = (
  type: string,
  text: string,
  className: string
) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

export const validateInput = (
  text: string,
  notEmpty: boolean,
  isNumber: boolean | number
) => {
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

export const checkAndGenerateText = (
  name: string,
  age: string
): boolean | string => {
  if (!validateInput(name, true, false) || !validateInput(age, false, true)) {
    return false;
  }
  return generateText(name, age);
};
