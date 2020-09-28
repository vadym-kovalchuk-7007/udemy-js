const task3Element = document.getElementById("task-3");

function empty() {
  alert("Empty function");
}

function getName(name) {
  alert(name);
}

empty();
getName("User");

task3Element.addEventListener("click", empty);

function getParams(one, two, three) {
  return `${one} ${two} ${three}`;
}
alert(getParams("Happy", "holliday", "today!"));
