type CountryMap = {
  [key: string]: string;
};

type GreetingsMap = {
  [key: string]: string[];
};

type LangMap = [string, string[]];

type GreetingProps = {
  greeting: string;
  language: string;
  username: string;
};

type IntroProps = {
  intro: string;
  name: string;
};

type Outro = {
  quote: string;
  origin: string;
};

export type { CountryMap, GreetingsMap, LangMap, GreetingProps, IntroProps, Outro };
