import { useState, useRef } from 'react';
import Pele from '/pele.jpg';
import { neutralNames, femaleNames, maleNames } from '../data/names';
import { neutralTitles, femaleTitles, maleTitles } from '../data/titles';
import { likesArr, dislikesArr } from '../data/activities';
import { likeVerbs, dislikeVerbs } from '../data/verbs';
import { surnames, neutralSuffixes, maleSuffixes } from '../data/surnames';
import intros from '../data/intros';
import outros from '../data/outros';
import yatesShuffle from '../utils/yatesShuffle';

const len: { [key: string]: number } = {
  intros: intros.length,
  outros: outros.length,
  neutralNames: neutralNames.length,
  femaleNames: femaleNames.length,
  maleNames: maleNames.length,
  neutralTitles: neutralTitles.length,
  femaleTitles: femaleTitles.length,
  maleTitles: maleTitles.length,
  likesArr: likesArr.length,
  dislikesArr: dislikesArr.length,
  likeVerbs: likeVerbs.length,
  dislikeVerbs: dislikeVerbs.length,
  surnames: surnames.length,
  neutralSuffixes: neutralSuffixes.length,
  maleSuffixes: maleSuffixes.length
};

const nums: string[] = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six'];

const VALUE1: number = 2;
const VALUE2: number = 3;

for (let arr of [neutralNames, femaleNames, maleNames, neutralTitles, femaleTitles, maleTitles, surnames, neutralSuffixes, maleSuffixes, intros, outros, likesArr, dislikesArr, likeVerbs, dislikeVerbs]) {
  yatesShuffle(arr);
}

const MainLogic = () => {
  const [name, setName] = useState<string>('Pele');
  const [age, setAge] = useState<number>(14);
  const [breed, setBreed] = useState<string>('Domestic Semifloof');
  // const [gender, setGender] = useState<string>('f');
  const [title, setTitle] = useState<string>('Princess');
  const [surname, setSurname] = useState<string>('of House Chonk');
  const [intro, setIntro] = useState<string>('Hey, my name is');
  const [outro, setOutro] = useState<string>('Sometimes it really do be like that.');
  const [likes, setLikes] = useState<string[]>(['playing roly poly', 'making biscuits']);
  const [dislikes, setDislikes] = useState<string[]>(['cruciferous veggies', 'fridge buzz', "Schrödinger's Cat"]);
  const [likePhrase, setLikePhrase] = useState<string>('I love');
  const [dislikePhrase, setDislikePhrase] = useState<string>("I don't like");

  const buttonRef = useRef<HTMLButtonElement>(null);

  // Connect array elements into a coherent string
  const formatActivities = (arr: string[], conj: string): string => {
    if (arr.length === 2) return `${arr[0]} ${conj} ${arr[1]}`;

    // Oxford comma, bitch
    return `${arr.slice(0, -1).join(', ')}, ${conj} ${arr.slice(-1)}`;
  }

  const formattedLikes: string = formatActivities(likes, 'and');
  const formattedDislikes: string = formatActivities(dislikes, 'or');

  // Use this for everything
  const getRandomNumber = (n: number): number => {
    return Math.floor(Math.random() * n);
  };

  const getGender = (): string => {
    const newGender: number = getRandomNumber(10);
    if (newGender > 6) return 'f';
    if (newGender < 3) return 'm';
    return 'n';
  };

  const getTitle = (newGender: string): string => {
    const neutralTitle: string = neutralTitles[getRandomNumber(len.neutralTitles)];
    const femaleTitle: string = femaleTitles[getRandomNumber(len.femaleTitles)];
    const maleTitle: string = maleTitles[getRandomNumber(len.maleTitles)];
    let roll: number = getRandomNumber(2);
    if (newGender === 'n') {
      roll = getRandomNumber(3);
      if (roll === 0) return neutralTitle;
      if (roll === 1) return femaleTitle;
      return maleTitle;
    }
    if (newGender === 'f') {
      if (roll === 0) return neutralTitle;
      return femaleTitle;
    }
    if (roll === 0) return neutralTitle;
    return maleTitle;
  };

  const getName = (newGender: string): string => {

    let nameIndex: number;
    if (newGender === 'f') {
      nameIndex = getRandomNumber(len.femaleNames);
      return femaleNames[nameIndex];
    }
    if (newGender === 'm') {
      nameIndex = getRandomNumber(len.maleNames);
      return maleNames[nameIndex];
    }
    nameIndex = getRandomNumber(len.neutralNames);
    return neutralNames[nameIndex];
  };

  const getSurname = (newGender: string): string => {
    console.log('newGender:', newGender)
    let index: number;
    if (newGender === 'm') {
      let chance: number = getRandomNumber(5);
      if (chance < 1) {
        index = getRandomNumber(maleSuffixes.length);
        return maleSuffixes[index];
      }
    }

    let diceRoll: number = getRandomNumber(2);
    if (diceRoll === 0) {
      index = getRandomNumber(len.surnames);
      return `of ${surnames[index]}`;
    }
    index = getRandomNumber(len.neutralSuffixes);
    return `the ${neutralSuffixes[index]}`;
  };

  const getActivities = (arr: string[], n: number): string[] => {
    const len = arr.length;

    // Get likes & dislikes, check for duplicates
    let activitySet = new Set<string>();
    while (activitySet.size < n) {
      let i: number = getRandomNumber(len);
      activitySet.add(arr[i]);
    }
    return [...activitySet];
  }

  const handleClick = (): void => {
    // We add one so age isn't 0
    setAge(getRandomNumber(25) + 1);

    const newGender: string = getGender();
    // setGender(newGender);
  
    // Get names and titles
    setTitle(getTitle(newGender));

    const newName: string = getName(newGender);

    setName(newName);
    setSurname(getSurname(newGender));


    // Select varying numbers of likes & dislikes
    const diceRoll: number = getRandomNumber(2);
    const newLikes: string[] = getActivities(likesArr, diceRoll === 0 ? VALUE1 : VALUE2);
    setLikes(newLikes);
    const newDislikes: string[] = getActivities(dislikesArr, diceRoll === 1 ? VALUE1 : VALUE2);
    setDislikes(newDislikes);

    // Choose verbs to describe likes & dislikes
    const newLikePhrase: number = getRandomNumber(len.likeVerbs);
    setLikePhrase(likeVerbs[newLikePhrase]);
    const newDislikePhrase: number = getRandomNumber(len.dislikeVerbs);
    setDislikePhrase(dislikeVerbs[newDislikePhrase]);

    // Choose intro & outro
    const newIntro: number = getRandomNumber(len.intros);
    setIntro(intros[newIntro]);
    const newOutro: number = getRandomNumber(len.outros);
    setOutro(outros[newOutro]);
    console.log(newName)
    setBreed('Domestic Semifloof');
    if (buttonRef.current) {
      buttonRef.current.blur();
    }
  }

  return (
    <main className="main">
      <div className="main__container">
        <section className="image__container">
          <img
            src={Pele}
            alt="My darling Pele"
            className='image'
          />
        </section>
        <section className="info">
          <h2 className="info__title">Cattributes</h2>
          <p className="info__sub">Meet your cattastic companion. A feline friend. The purrfect pal.</p>
          <p className="info__sub">Want another? Go on and boop that big silly button.</p>
          <div className="info__facts">
            <div className="info__wrapper">
              <span className="info__label">Name</span>
              <p className="info__text">{title} {name} {surname}</p>
            </div>
            <div className="info__wrapper">
              <span className="info__label">Age</span>
              <p className="info__text">{age}</p>
            </div>
            <div className="info__wrapper">
              <span className="info__label">Breed</span>
              <p className="info__text">{breed}</p>
            </div>
          </div>
          <p className="info__para">{`${intro} ${name}, and I'm ${(age % 10 === 8 || age === 11) ? 'an' : 'a' } ${nums[age]}-year-old ${breed}. ${likePhrase} ${formattedLikes}. ${dislikePhrase} ${formattedDislikes}. ${outro}` }
          </p>
          <button
            className="button"
            ref={buttonRef}
            onClick={handleClick}
          >
            Catalyze
          </button>
        </section>
      </div>
    </main>
  );
};

export default MainLogic;
