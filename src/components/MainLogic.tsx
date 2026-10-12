import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Image from './Image';
import FastFact from './FastFact';
import Paragraph from './Paragraph';
import Form from './Form';
import type { MainLogicProps, Outro } from '../data/types';
import { getGreeting, getLanguage } from '../data/greetings.ts';
import { getIntro } from '../data/intros.ts';
import { likeVerbs, dislikeVerbs } from '../data/verbs.ts';
import { likesArr, dislikesArr } from '../data/activities.ts';
import getPreferences from '../utils/getPreferences.ts';
import { neutralNames, femaleNames, maleNames } from '../data/names';
import { neutralTitles, femaleTitles, maleTitles } from '../data/titles';
import { surnames, neutralSuffixes, maleSuffixes } from '../data/surnames';
import getOutro from '../data/outros';
import yatesShuffle from '../utils/yatesShuffle';
import chooseItem from '../utils/chooseItem';
import getRandomNumber from '../utils/getRandomNumber';
import breedList from '../data/breedList.ts';

// Constants to balance number of likes & dislikes
const VALUE1: number = 2;
const VALUE2: number = 3;

const MAX_AGE: number = 21;

const DOMAIN: string = "https://api.thecatapi.com/v1/images/search?";
const API_KEY: string = import.meta.env.VITE_API_KEY;

const unknownBreeds: string[] = ['cat', 'kitty', 'kitty cat', 'fur baby', 'furball', 'ball of fur', 'bundle of joy', 'feline'];

// Shuffle the arrays on every page load because I feel like it
for (let arr of [neutralNames, femaleNames, maleNames, neutralTitles, femaleTitles, maleTitles, surnames, neutralSuffixes, maleSuffixes]) {
  yatesShuffle(arr);
}

const MainLogic = ({ isInert }: MainLogicProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [imageURL, setImageURL] = useState<string>('');
  const [fade, setFade] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(14);
  const [breed, setBreed] = useState<string>('rand');
  const [randCat, setRandCat] = useState<string>('cat');
  const [title, setTitle] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('US');
  const [description, setDescription] = useState<string | null>(null);
  const [outro, setOutro] = useState<Outro>({quote: '', origin: ''});
  const [lang, setLang] = useState<string>('US English');
  const [greeting, setGreeting] = useState<string>('Hi');
  const [intro, setIntro] = useState<string>('');
  const [likes, setLikes] = useState<string>('');
  const [dislikes, setDislikes] = useState<string>('');

  // Scroll up to image after button click
  const ref = useRef<HTMLDivElement | null>(null);

  console.log('render');

  // Random & arbitrary af, but I do what I want
  const getGender = (): string => {

    const gender: number = getRandomNumber(10);
    if (gender > 6) return 'f';
    if (gender < 3) return 'm';

    return 'n';
  };

  const getTitle = (gender: string): string => {

    // Just gonna grab all possibilities so we're not duplicating code
    const [neutralTitle, femaleTitle, maleTitle]: string[] = [neutralTitles, femaleTitles, maleTitles].map(titles => chooseItem(titles));

    let roll: number = getRandomNumber(2);
    if (gender === 'n') {

      // Neutral can have any title
      roll = getRandomNumber(3);

      // Ooh, let's "switch" it up lol
      switch (roll) {
        case 0: return neutralTitle;
        case 1: return femaleTitle;
        default: return maleTitle;
      }
    }

    if (gender === 'f') {
      if (roll === 0) return neutralTitle;
      return femaleTitle;
    }

    // gender === 'm'
    if (roll === 0) return neutralTitle;
    return maleTitle;
  };

  // Does what it says
  const getName = (gender: string): string => {

    switch (gender) {
      case 'f': return chooseItem(femaleNames);
      case 'm': return chooseItem(maleNames);
      case 'n': return chooseItem(neutralNames);
      default: return chooseItem(neutralNames);
    }
  };

  // They're not all surnames, don't @ me
  const getSurname = (gender: string): string => {

    let diceRoll: number;

    // Dudes only
    if (gender === 'm') {

      // Not many to choose from, so we keep odds low
      diceRoll = getRandomNumber(5);
      if (diceRoll < 1) {
        return chooseItem(maleSuffixes);
      }
    }

    // Anyone can have these
    diceRoll = getRandomNumber(2);
    if (diceRoll === 0) {
      return `of ${chooseItem(surnames)}`;
    }

    return `the ${chooseItem(neutralSuffixes)}`;
  };

// Set all the mf state

  const getCat = async (newBreed: string) => {
    console.log('fetch called');
    console.log('current breed in function:', breed);
    setBreed(newBreed);
    setIsLoading(true);
    setFade(false);
    setIntro(getIntro);
    setRandCat(chooseItem(unknownBreeds));

    // Generate random numbers for our component
    const coinFlip: number = getRandomNumber(2);
    const likesNum: number = [VALUE1, VALUE2][coinFlip];
    const dislikesNum: number = [VALUE2, VALUE1][coinFlip];
    setLikes(getPreferences(likesArr, likesNum, chooseItem(likeVerbs), 'and'));
    setDislikes(getPreferences(dislikesArr, dislikesNum, chooseItem(dislikeVerbs), 'or'));

    let newCountryCode: string = 'US';

    try {
      let URL: string = DOMAIN;
      let res;
      let desc: string = '';

      if (newBreed === 'rand') {
        // Get either a random cat or one with a listed breed
        let diceRoll: number = getRandomNumber(2);
        if (diceRoll === 0) {
          URL += `api_key=${API_KEY}&has_breeds=true`;
        }
        res = await axios.get(URL);
        console.log('res:', res);

        if (diceRoll === 0) {
          let randBreed = res.data[0].breeds[0].id;
          newCountryCode = res.data[0].breeds[0].country_code;
          desc = res.data[0].breeds[0].description;
          console.log('dice roll 0', randBreed, res.data[0].breeds[0].name);
          setBreed(randBreed);
        }
      } else {
        res = await axios.get(`${URL}breed_ids=${newBreed}&api_key=${API_KEY}`);
        newCountryCode = res.data[0].breeds[0].country_code;
        desc = res.data[0].breeds[0].description;

        console.log('breed res:', res);
      }

      setCountryCode(newCountryCode);
      setDescription(desc.trim());
      setImageURL(res.data[0].url);
      setError(false);

    } catch (err) {
      console.error('Error:', err);
      setError(true);
    } finally {
      setTimeout(() => {
      // All dynamic text is generated regardless of error
      // We add one so age isn't 0
      let age: number = getRandomNumber(MAX_AGE) + 1;

      // Increase odds of choosing younger ages
      if (age > MAX_AGE / 3) {
        let diceRoll: number = getRandomNumber(3);
        if (diceRoll > 0) {
        age = Math.round(age / 3);
        }
      }
      setAge(age);

      // Just so names & titles make sense
      const gender: string = getGender();

      // Get names & titles & surnames or whatever
      setTitle(getTitle(gender));
      const newName: string = getName(gender);
      setName(newName);
      setSurname(getSurname(gender));

      // Choose intro & outro
      setLang(getLanguage(newCountryCode));
      setGreeting(getGreeting(getLanguage(newCountryCode)))
      setOutro(getOutro());
      setIsLoading(false);
      setFade(true);
    }, 400);
  }

};

  const handleClick = (e: any, draftName: string, newBreed: string): void => {
    e.preventDefault();
    console.log('e from main:', draftName, username, e);
    setUsername(draftName);
    getCat(newBreed);
  };

  useEffect(() => {
    getCat('rand');
  }, []);

  useEffect(() => {
    if (!imageURL) return;

    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, [imageURL]);

  // So we can map our shiz to each fact component
  const fastFacts: string[][] = [
    [ 'name', `${title} ${name} ${surname}` ],
    [ 'age', age.toString() ],
    [ 'breed', breed === 'rand' ? 'Cat' : breedList[breed]]
  ];

  return (
    <main className="main" inert={isInert}>
      <div className="main__container" ref={ref}>
        <Image 
          isLoading={isLoading} 
          error={error} 
          fade={fade} 
          image={imageURL} 
          breed={breedList[breed]}
        />

        <section className="info">
          <h2 className="info__title">Don't agonize, Catalyze.</h2>
          <div className="info__subs">
            <p className="info__sub">Meet your cattastic companion.&nbsp;</p>
            <p className="info__sub">A feline friend. The purrfect pal.</p>
            <p className="info__sub">Want another? Go on and boop that big silly button.</p>
          </div>

          <div className="info__facts">
            {fastFacts.map((item, i) => (
              <FastFact key={i} isLoading={isLoading} fade={fade} label={item[0]} fact={item[1]} />
            ))}
          </div>

          <Paragraph
            isLoading={isLoading}
            fade={fade}
            countryCode={countryCode}
            username={username}
            name={name}
            age={age}
            breed={breedList[breed]}
            randCat={randCat}
            desc={description}
            outro={outro}
            greeting={greeting}
            language={lang}
            intro={intro}
            likes={likes}
            dislikes={dislikes}
          />

          <Form 
            isLoading={isLoading}
            breeds={breedList} 
            handleClick={handleClick} 
          />

        </section>

      </div>
    </main>
  );
};

export default MainLogic;
