type CountryMap = {
  [key: string]: string;
};

type GreetingsMap = {
  [key: string]: string[];
};

type LangMap = [string, string[]];

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
  'JP': 'Japanese'
};

const greetings: GreetingsMap = {
  'English': ['Hello', 'Hi', 'Hey'],
  'Arabic': ['As-salaamu alaykum', 'Marhaba'],
  'Thai': ['Sawasdee'],
  'Russian': ['Zdravstvuyte', 'Privet'],
  'French': ['Bonjour', 'Salut'],
  'Turkish': ['Merhaba', 'Selam'],
  'Somali': ['Salaam alaykum', 'See tahay', 'Salaan sare'],
  'Farsi': ['Salam', 'Dorood', 'Salam Aleykom'],
  'Norwegian': ['Hei', 'Heisann', 'Hallo', 'Hei på deg'],
  'Greek': ['Yassas', 'Yassou'],
  'Spanish': ['¡Hola'],
  'German': ['Hallo', 'Guten Tag'],
  'Burmese': ['Mingalaba', 'Nikongla'],
  'Mandarin': ['Nǐ hǎo', 'Hāi', 'Hēi'],
  'Japanese': ['Konnichiwa', 'Hajimemashite', 'Ya']
};

const US: LangMap = ['US English', ['Howdy', 'Ayyy', 'Yo', 'Whaddup', "'Sup"]];
const AU: LangMap = ['AU English', ["G'day"]];
const UK: LangMap = ['UK English', ['Hullo', 'Greetings', 'Greetings and salutations']];

for (let [lang, languages] of [US, AU, UK]) {
  greetings[lang] = [...greetings['English'], ...languages];
}

console.log(greetings);

export { languages, greetings };
