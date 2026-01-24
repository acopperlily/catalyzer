import Tooltip from "./Tooltip";
import type { GreetingProps } from "../data/types";

const Greeting = ({ greeting, language, username }: GreetingProps) => {

  const getGreeting = (greeting: string, username: string): string => {
    if (username) {
      return `${greeting}, ${username}! `;
    }
    return `${greeting}! `;
  }

  let hello = getGreeting(greeting, username);
  

  return (
    <Tooltip content={language} children={hello} className="greeting" />
  );
};

export default Greeting;
