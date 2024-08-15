import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import FastFact from './FastFact';
import Paragraph from './Paragraph';
import Pele from '/pele.jpg';
import { neutralNames, femaleNames, maleNames } from '../data/names';
import { neutralTitles, femaleTitles, maleTitles } from '../data/titles';
import { likesArr, dislikesArr } from '../data/activities';
import { likeVerbs, dislikeVerbs } from '../data/verbs';
import { surnames, neutralSuffixes, maleSuffixes } from '../data/surnames';
import intros from '../data/intros';
import outros from '../data/outros';
import yatesShuffle from '../utils/yatesShuffle';
import getRandomNumber from '../utils/getRandomNumber';

// Constants to balance number of likes & dislikes
const VALUE1: number = 2;
const VALUE2: number = 3;

const MAX_AGE: number = 24;

const DOMAIN = "https://api.thecatapi.com/v1/images/search?";
const API_KEY = import.meta.env.VITE_API_KEY;

type BreedsObject = { [key: string]: string};

// Shuffle the arrays on every page load because I feel like it
for (let arr of [neutralNames, femaleNames, maleNames, neutralTitles, femaleTitles, maleTitles, surnames, neutralSuffixes, maleSuffixes, intros, outros, likesArr, dislikesArr, likeVerbs, dislikeVerbs]) {
  yatesShuffle(arr);
}

const MainLogic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [breeds, setBreeds] = useState<BreedsObject>({rand: 'Random Breed'});
  const [imageURL, setImageURL] = useState<string>('');
  const [fade, setFade] = useState<boolean>(true);
  const [triggerFetch, setTriggerFetch] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(14);
  const [breed, setBreed] = useState<string>('rand');
  const [title, setTitle] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [intro, setIntro] = useState<string>('');
  const [outro, setOutro] = useState<string>('');
  const [likes, setLikes] = useState<string[]>([]);
  const [dislikes, setDislikes] = useState<string[]>([]);
  const [likePhrase, setLikePhrase] = useState<string>('');
  const [dislikePhrase, setDislikePhrase] = useState<string>('');

  // Random & arbitrary af, but I do what I want
  const getGender = (): string => {

    const gender: number = getRandomNumber(10);
    if (gender > 6) return 'f';
    if (gender < 3) return 'm';

    return 'n';
  };

  const getTitle = (gender: string): string => {

    // Just gonna grab all possibilities so we're not duplicating code
    const [neutralTitle, femaleTitle, maleTitle]: string[] = [neutralTitles, femaleTitles, maleTitles].map(titles => titles[getRandomNumber(titles.length)]);

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

    let nameIndex: number;
    if (gender === 'f') {
      nameIndex = getRandomNumber(femaleNames.length);
      return femaleNames[nameIndex];
    }

    if (gender === 'm') {
      nameIndex = getRandomNumber(maleNames.length);
      return maleNames[nameIndex];
    }

    // gender === 'n'
    nameIndex = getRandomNumber(neutralNames.length);
    return neutralNames[nameIndex];
  };

  // They're not all surnames, don't @ me
  const getSurname = (gender: string): string => {

    let index: number;
    let diceRoll: number;

    // Dudes only
    if (gender === 'm') {

      // Not many to choose from, so we keep odds low
      diceRoll = getRandomNumber(5);
      if (diceRoll < 1) {
        index = getRandomNumber(maleSuffixes.length);
        return maleSuffixes[index];
      }
    }

    // Anyone can have these
    diceRoll = getRandomNumber(2);
    if (diceRoll === 0) {
      index = getRandomNumber(surnames.length);
      return `of ${surnames[index]}`;
    }

    index = getRandomNumber(neutralSuffixes.length);
    return `the ${neutralSuffixes[index]}`;
  };

  // Choose likes & dislikes
  const getActivities = (arr: string[], n: number): string[] => {
    const len = arr.length;

    // Check for duplicates
    let activitySet = new Set<string>();
    while (activitySet.size < n) {
      let i: number = getRandomNumber(len);
      activitySet.add(arr[i]);
    }

    return [...activitySet];
  };

  // Set all the mf state
  const handleClick = (e: any): void => {
    e.stopPropagation();
    if (e.target.id !== 'breeds')
      setTriggerFetch(!triggerFetch);
  };

  const handleChange = (e: any): void => {
    e.stopPropagation();
    setBreed(e.target.value);
    setTriggerFetch(!triggerFetch);
  };

  useEffect(() => {
    const getBreeds = async () => {
      let breedsList = { rand: 'Random Breed' };
      try {
        const res = await axios.get('https://api.thecatapi.com/v1/breeds');
        console.log('breeds:', res.data);

        for (let breed of res.data) {
          breedsList = {
            ...breedsList,
            [breed.id]: breed.name
          };
        }
      } catch (err) {
        console.error("Can't retrieve breed list:", err);
      } finally {
        setBreeds(breedsList);
      }
    };

    getBreeds();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setFade(false);

    // This cancels erroneous requests
    const controller = new AbortController();
    const signal = controller.signal;

    const getCat = async () => {
      try {
        let URL = DOMAIN;
        let res;

        if (breed === 'rand') {
          // Get either a random cat or one with a listed breed
          let diceRoll = getRandomNumber(2);
          if (diceRoll === 0) {
            URL += `api_key=${API_KEY}&has_breeds=true`;
          }
          res = await axios.get(URL, { signal });

          console.log(res.data);

          let newBreed;
          if (diceRoll === 0) {
            newBreed = res.data[0].breeds[0].id;
            console.log('breeds', res.data[0].breeds[0]);
            setBreed(newBreed);
          }
        } else {
          res = await axios.get(`${URL}breed_ids=${breed}`, { signal });
          console.log('breed fetch:', res.data);
        }

        setImageURL(res.data[0].url);
        setError(false);

      } catch (err) {
        console.error('Error:', err);
        setError(true);
      } finally {

        setTimeout(() => {
          // All dynamic text is generated regardless of error
          // We add one so age isn't 0
          let age = getRandomNumber(MAX_AGE) + 1;

          // Increase odds of choosing younger ages
          if (age > MAX_AGE / 2) {
            let diceRoll = getRandomNumber(3);
            if (diceRoll > 0) {
            age = Math.round(age / 2);
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

          // Select varying numbers of likes & dislikes
          const diceRoll: number = getRandomNumber(2);
          const newLikes: string[] = getActivities(likesArr, diceRoll === 0 ? VALUE1 : VALUE2);
          setLikes(newLikes);
          const newDislikes: string[] = getActivities(dislikesArr, diceRoll === 1 ? VALUE1 : VALUE2);
          setDislikes(newDislikes);

          // Choose verbs to describe likes & dislikes
          const [newLikePhrase, newDislikePhrase]: number[] = [likeVerbs, dislikeVerbs].map(arr => getRandomNumber(arr.length));
          setLikePhrase(likeVerbs[newLikePhrase]);
          setDislikePhrase(dislikeVerbs[newDislikePhrase]);

          // Choose intro & outro
          const [newIntro, newOutro]: number[] = [intros, outros].map(arr => getRandomNumber(arr.length));
          setIntro(intros[newIntro]);
          setOutro(outros[newOutro]);
          setIsLoading(false);
          setFade(true);
        }, 800);

      }
    }

    getCat();

    return () => {
      controller.abort();
    }
  }, [triggerFetch]);

  // So we can map our shiz to each fact component
  const fastFacts: string[][] = [
    [ 'name', `${title} ${name} ${surname}` ],
    [ 'age', age.toString() ],
    [ 'breed', breed === 'rand' ? 'Cat' : breeds[breed]]
  ];

  console.log('breeds in state:', breeds);
  console.log('current breed:', breed, breeds[breed])

  return (
    <main className="main">
      <div className="main__container">
        <section className="image__container">
          {isLoading ? (
            <Loading />
          ) : error ? (
            <img 
              src={Pele}
              className={`${fade ? 'fade-in image' : 'image'}`}
            />
          ) : (
            <img
              src={imageURL}
              className={`${fade ? 'fade-in image' : 'image'}`}
            />
          )}

        </section>
        <section className="info">
          <h2 className="info__title">Cattributes</h2>
          <div className="info__subs">
            <p className="info__sub">Meet your cattastic companion.&nbsp;</p>
            <p className="info__sub"> A feline friend. The purrfect pal.</p>
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
            intro={intro}
            name={name}
            age={age}
            breed={breeds[breed]}
            likePhrase={likePhrase}
            dislikePhrase={dislikePhrase}
            likes={likes}
            dislikes={dislikes}
            outro={outro}
          />

          <div className="dropdown" onClick={e => handleClick(e)}>
            <label 
              className='dropdown__label' 
              htmlFor="breeds"
            >
              Catalyze
            </label>
            <select
              name="breeds"
              id="breeds"
              className='dropdown__select'
              onChange={e => handleChange(e)}
              value={breed}
            >
              {Object.entries(breeds).map(([id, name]) => (
                <option key={id} value={id}>{name}</option>
              ))}
            </select>
          </div>

        </section>
      </div>
    </main>
  );
};

export default MainLogic;
