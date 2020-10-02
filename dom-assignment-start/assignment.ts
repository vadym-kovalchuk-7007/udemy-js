"use strict";
const task1v01 = document.getElementById("task-1") as HTMLElement;
task1v01.style.color = "#FFFFFF";
const task1v02 = document.querySelector("ol li:first-child") as HTMLElement;
task1v02.style.backgroundColor = "#000000";

const task2v01 = document.querySelector("title") as HTMLElement;
const titleText = "Assignment - Solved!";
document.title = titleText;
const docTitle = document.title;
task2v01.textContent = titleText;

// console.log(docTitle === task2v01.textContent);
document.querySelector("h1").textContent = titleText;
