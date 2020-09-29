const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const MAX_NUMBER = 0.7;
if (randomNumber > MAX_NUMBER) {
  alert(`Greather then ${MAX_NUMBER}`);
}

const arr = [0, 1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (const elem of arr) {
  console.log(elem);
}
let i = arr.length;
while (i >= 0) {
  console.log(arr[i]);
  i--;
}
const randomNumber2 = Math.random();
const MIN_NUMBER = 0.2;
if (
  (randomNumber > MAX_NUMBER && randomNumber2 > MAX_NUMBER) ||
  randomNumber < MIN_NUMBER ||
  randomNumber2 < MIN_NUMBER
) {
  alert("Coincidence");
}
