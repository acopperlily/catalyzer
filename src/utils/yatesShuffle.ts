const yatesShuffle = (arr: string[]) => {
  let len: number = arr.length;
  let i: number;
  let j: string;
  while (len) {
    i = Math.floor(Math.random() * len--);
    j = arr[len];
    arr[len] = arr[i];
    arr[i] = j;
  }
  return arr;
}

export default yatesShuffle;
