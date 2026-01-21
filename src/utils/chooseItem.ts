import getRandomNumber from "./getRandomNumber";

// Can choose from array of strings or array of objects
function chooseItem<T>(arr: T[]): T {
  const len = arr.length;
  const index = getRandomNumber(len);
  return arr[index];
}

export default chooseItem;
