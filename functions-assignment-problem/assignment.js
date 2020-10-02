const sayHello = (name) => console.log("Hi " + name);

sayHello("JSProgrammer");

const sayHello2 = (greet, name) => console.log(`${greet} ${name}!`);
sayHello2("Good day", "boss");

const sayHello3 = () => console.log("Hello dear user!");
sayHello3();

const sayHello4 = (name) => `Good morning ${name}!`;
console.log(sayHello4("Customer"));

const sayHello5 = (name, greet = "Hello") => console.log(`${greet} ${name}!`);
sayHello5("John");

const noArgumentProvided = () => "No argument provided or empty string found!";

const checkUp = (cb, ...params) => {
  let message =
    !params.length || !!params.filter((param) => param.trim() === "").length
      ? cb()
      : "arguments provided " + params;
  console.log(message);
};

checkUp(noArgumentProvided, "a", "b", "c");
checkUp(noArgumentProvided);
checkUp(noArgumentProvided, "");
checkUp(noArgumentProvided, " ");
checkUp(noArgumentProvided, "s", " ");
