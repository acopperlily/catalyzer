type AgeProps = { 
  age: number;
};

type BreedInfo = {
  description: string | null,
  history: string | null;
};

type BreedProps = { 
  breed: string; 
  randCat: string;
  breedInfo: BreedInfo | null;
};

type BreedsObject = { 
  [key: string]: any;
};

type CountryMap = {
  [key: string]: string;
};

type FactProps = {
  isLoading: boolean,
  fade: boolean,
  label: string,
  fact: string;
};

type FooterProps = { 
  isInert: boolean; 
};

type FormProps = {
  isLoading: boolean;
  breeds: object;
  handleClick: any;
};

type GreetingsMap = {
  [key: string]: string[];
};

type GreetingProps = {
  greeting: string;
  language: string;
  username: string;
};

type HeaderProps = {
  isInert: boolean;
  handleClick: () => void;
};

type ImageProps = {
  isLoading: boolean,
  error: boolean,
  fade: boolean,
  image: string,
  breed: string
};

type IntroProps = {
  intro: string;
  name: string;
};

type LangMap = [string, string[]];

type MainLogicProps = { 
  isInert: boolean; 
};

type ModalProps = {
  handleClick: () => void;
};

type Outro = {
  quote: string;
  origin: string;
};

type ParaProps = {
  isLoading: boolean;
  fade: boolean;
  username: string;
  name: string;
  age: number;
  breed: string;
  randCat: string;
  breedInfo: BreedInfo;
  outro: Outro;
  greeting: string;
  language: string;
  intro: string;
  likes: string;
  dislikes: string;
};

type TooltipProps = {
  content: string | null;
  children: any;
  className: string;
};

export type { AgeProps, BreedInfo, BreedProps, BreedsObject, CountryMap, FactProps, FooterProps, FormProps, GreetingsMap, GreetingProps, HeaderProps, ImageProps, IntroProps, LangMap, MainLogicProps, ModalProps, Outro, ParaProps, TooltipProps };
