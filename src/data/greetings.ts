import type { CountryMap, GreetingsMap, LangMap } from "./types";
import chooseItem from "../utils/chooseItem";

const languages: CountryMap = {
  'US': 'US English',
  'UK': 'UK English',
  'CA': 'English',
  'EG': 'Arabic',
  'TH': 'Thai',
  'RU': 'Russian',
  'FR': 'French',
  'TR': 'Turkish',
  'SO': 'Somali',
  'IR': 'Farsi',
  'NO': 'Norwegian',
  'GR': 'Greek',
  'SP': 'UK English',
  'CY': 'Greek',
  'ES': 'Spanish',
  'MX': 'Spanish',
  'AU': 'AU English',
  'GB': 'UK English',
  'DE': 'German',
  'MM': 'Burmese',
  'CN': 'Mandarin',
  'JP': 'Japanese',
  'AE': 'Arabic'
};

const greetings: GreetingsMap = {
  'English': ['Hello', 'Hi', 'Hey', 'Meow'],
  'Arabic': ['As-salaamu alaykum', 'Marhaba', 'Miao'],
  'Thai': ['Sawasdee', 'Miao'],
  'Russian': ['Zdravstvuyte', 'Privet', 'Myau'],
  'French': ['Bonjour', 'Salut', 'Miaou'],
  'Turkish': ['Merhaba', 'Selam', 'Miyav'],
  'Somali': ['Salaam alaykum', 'See tahay', 'Salaan sare', 'Miaa'],
  'Farsi': ['Salam', 'Dorood', 'Salam Aleykom', 'Miyū'],
  'Norwegian': ['Hei', 'Heisann', 'Hallo', 'Hei på deg', 'Mjau'],
  'Greek': ['Yassas', 'Yassou', 'Niaou'],
  'Spanish': ['¡Hola', 'Miau'],
  'German': ['Hallo', 'Guten Tag', 'Miau'],
  'Burmese': ['Mingalaba', 'Nikongla', 'Nyaung'],
  'Mandarin': ['Nǐ hǎo', 'Hāi', 'Hēi', 'Miāo'],
  'Japanese': ['Konnichiwa', 'Hajimemashite', 'Nyan']
};

const US: LangMap = ['US English', ['Howdy', 'Ayyy', 'Yo', 'Whaddup', "'Sup"]];
const AU: LangMap = ['AU English', ["G'day"]];
const UK: LangMap = ['UK English', ['Hullo', 'Greetings', 'Greetings and salutations']];

for (let [lang, languages] of [US, AU, UK]) {
  greetings[lang] = [...greetings['English'], ...languages];
}

console.log(greetings);

const catIntros: string[] = [
  "I am",
  "I'm",
  "My name is",
  "My name's",
  "You can call me",
  "They call me",
  "I go by many names, but you can call me"
];

const getLanguage = (cc: string): string => {
  if (cc in languages) {
    return languages[cc];
  }
  return 'US English';
}

const getIntro = (username: string): string => {
  if (username) {
    return `, ${username}!`;
  }
  return '!';
}

const getGreeting = (lang: string): string => chooseItem(greetings[lang]);

const getCatIntro = (): string => chooseItem(catIntros);

export { languages, greetings, getLanguage, getIntro, getCatIntro, getGreeting };
