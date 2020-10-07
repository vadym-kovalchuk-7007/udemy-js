import { createElement, checkAndGenerateText } from "./util.js";

const initApp = () => {
  // Initializes the app, registers the button click listener
  const newUserButton = document.querySelector("#btnAddUser")!;
  newUserButton.addEventListener("click", addUser);
};

const addUser = () => {
  // Fetches the user input, creates a new HTML element based on it
  // and appends the element to the DOM
  const newUserNameInput = document.querySelector(
    "input#name"
  )! as HTMLInputElement;
  const newUserAgeInput = document.querySelector(
    "input#age"
  )! as HTMLInputElement;

  const userList = document.querySelector(".user-list");
  const outputText: string | boolean = checkAndGenerateText(
    newUserNameInput.value,
    newUserAgeInput.value
  );
  if (!outputText) {
    return;
  }
  const element = createElement("li", outputText as string, "user-item");
  userList?.appendChild(element);
};

// Start the app!
initApp();
