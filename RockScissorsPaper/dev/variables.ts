export enum Elements {
  rock = "ROCK",
  paper = "PAPER",
  scissors = "SCISSORS",
}

export enum messages {
  userWon = "User won",
  computerWon = "Computer won",
  draw = "Draw",
  prompt = "Please choose one of: ",
}

export type keyOfElements = keyof typeof Elements;

export const textResult = document.getElementById("result") as HTMLElement;
/**
 * Values of enum Elements.
 */
export const valuesOfElements = () => {
  let arr: string[] = [];
  for (const elem in Elements) {
    arr.push(Elements[elem as keyOfElements]);
  }
  return arr;
};
/**
 * Getting random key from Elements.
 */
export const randomKeyOfElements = () => {
  const objKeysArr = Object.keys(Elements);
  const randomKeyIndex = Math.floor(Math.random() * objKeysArr.length);
  return objKeysArr[randomKeyIndex];
};
