import getRandomNumber from "./getRandomNumber";

const chooseItem = (arr: string[]) => {
  const len = arr.length;
  const index = getRandomNumber(len);
  return arr[index];
}

export default chooseItem;
