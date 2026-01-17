type LangMap = {
  [key: string]: string;
};

type GreetingsMap = {
  [key: string]: string[];
};

const languages: LangMap = {
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
  'MM': 'Burmese'
};

const greetings: GreetingsMap = {
  'English': ['Hello', 'Hi', 'Hey'],
  'Arabic': ['As-salaamu alaykum', 'Marhaba'],
  'Thai': ['Sawasdee'],
  'Russian': ['Zdravstvuyte', 'Privet'],
  'French': ['Bonjour', 'Salut'],
  'Turkish': ['Merhaba', 'Selam'],
  'Somali': ['Salaam alaykum', 'See tahay?', 'Salaan sare'],
  'Farsi': ['Salam', 'Dorood', 'Salam Aleykom'],
  'Norwegian': ['Hei', 'Heisann', 'Hallo', 'Hei på deg'],
  'Greek': ['Yassas', 'Yassou'],
  'Spanish': ['¡Hola'],
  'German': ['Hallo', 'Guten Tag'],
  'Burmese': ['Mingalaba', 'Nikongla']
};

greetings['US English'] = [...greetings['English'], 'Howdy', 'Ayyy', 'Yo', 'Whaddup', "'Sup"]
greetings['AU English'] = [...greetings['English'], "G'day"];
greetings['UK English'] = [...greetings['English'], 'Hullo', 'Greetings', 'Greetings and salutations'],
console.log(greetings)

export { languages, greetings };
