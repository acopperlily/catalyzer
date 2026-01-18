import Tooltip from "./Tooltip";
import { languages, greetings } from "../data/greetings";
import chooseItem from "../utils/chooseItem";

type GreetingProps = {
  countryCode: string;
  username: string;
  name: string;
};

const catIntros: string[] = [
  "I am",
  "I'm",
  "My name is",
  "My name's",
  "You can call me",
  "They call me",
  "I go by many names, but you can call me"
];

const Greeting = ({ countryCode, username, name }: GreetingProps) => {

  const getLanguage = (cc: string): string => {
    if (cc in languages) {
      return languages[cc];
    }
    return 'US English';
  }

  const lang = getLanguage(countryCode);
  const hello = chooseItem(greetings[lang]);
  console.log('hello', hello);

  const getIntro = (username: string): string => {
    if (username) {
      return `, ${username}!`;
    }
    return '!';
  }

  const intro = getIntro(username);
  const catIntro = chooseItem(catIntros);

  return (
    <><Tooltip language={lang} greeting={hello} />{`${intro} ${catIntro} ${name}, and I'm `}</>
  );
};

export default Greeting;
