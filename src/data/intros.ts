import chooseItem from "../utils/chooseItem";

const intros: string[] = [
  "I am",
  "I'm",
  "My name is",
  "My name's",
  "You can call me",
  "They call me",
  "I go by many names, but you can call me"
];

const getIntro = (): string => chooseItem(intros);

export { getIntro };
