import { useState, useEffect } from 'react';
import Pele from '../assets/pele.jpg';
import { neutralNames, femaleNames, maleNames } from '../data/names';
import { neutralTitles, femaleTitles, maleTitles } from '../data/titles';
import { likesArr, dislikesArr } from '../data/activities';
import { likeVerbs, dislikeVerbs } from '../data/verbs';
import { surnames, neutralSuffixes, maleSuffixes } from '../data/surnames';

const MainLogic = () => {
  const [name, setName] = useState<string>('Pele');
  const [age, setAge] = useState<number>(14);
  const [breed, setBreed] = useState<string>('Domestic Semifloof');
  const [gender, setGender] = useState<string>('f');
  const [title, setTitle] = useState<string>('Princess');
  const [surname, setSurname] = useState<string>('of House Chonk');
  const [likes, setLikes] = useState<string[]>(['playing roly poly', 'catching sky raisins', 'making biscuits']);
  const [dislikes, setDislikes] = useState<string[]>(['broccoli', 'fridge buzz', "Schrodinger's Cat"]);
  const [likePhrase, setLikePhrase] = useState<string>('I love');
  const [dislikePhrase, setDislikePhrase] = useState<string>("I don't like");

  const formatActivities = (arr: string[], conj: string): string => {
    if (arr.length === 2) return `${arr[0]} ${conj} ${arr[1]}`;

    // Oxford comma, bitch
    return `${arr.slice(0, -1).join(', ')}, ${conj} ${arr.slice(-1)}`;
  }

  const formattedLikes = formatActivities(likes, 'and');
  const formattedDislikes = formatActivities(dislikes, 'or');

  const getRandomNumber = (n: number): number => {
    return Math.floor(Math.random() * n);
  };

  const getGender = (): string => {
    const newGender: number = getRandomNumber(10);
    if (newGender > 6) return 'f';
    if (newGender < 3) return 'm';
    return 'n';
  };

  // const hasTitle = (): boolean => {
  //   const n: number = getRandomNumber(5);
  //   return n < 4;
  // };


  const getTitle = (gender: string): string => {
    let roll: number = getRandomNumber(2);
    if (gender === 'n') {
      roll = getRandomNumber(3);
      if (roll === 0) return neutralTitles[getRandomNumber(neutralTitles.length)];
      if (roll === 1) return femaleTitles[getRandomNumber(femaleTitles.length)];
      return maleTitles[getRandomNumber(maleTitles.length)];
    }
    if (gender === 'f') {
      if (roll === 0) return neutralTitles[getRandomNumber(neutralTitles.length)];
      return femaleTitles[getRandomNumber(femaleTitles.length)];
    }
    if (roll === 0) return neutralTitles[getRandomNumber(neutralTitles.length)];
    return maleTitles[getRandomNumber(maleTitles.length)];
  };

  const getName = (gender: string): string => {
    let name: string = '';

    let nameIndex: number;
    if (gender === 'f') {
      nameIndex = getRandomNumber(femaleNames.length);
      return name + femaleNames[nameIndex];
    }
    if (gender === 'm') {
      nameIndex = getRandomNumber(maleNames.length);
      return name + maleNames[nameIndex];
    }
    nameIndex = getRandomNumber(neutralNames.length);
    return name + neutralNames[nameIndex];
  };

  const getSurname = (): string => {
    let diceRoll = getRandomNumber(2);
    let index: number;
    if (diceRoll === 0) {
      index = getRandomNumber(surnames.length);
      return `of ${surnames[index]}`;
    }
    index = getRandomNumber(neutralSuffixes.length);
    return `the ${neutralSuffixes[index]}`;
  };

  const getActivities = (arr: string[]): string[] => {
    let activities: string[] = [];
    const len = arr.length;
    for (let i = 0; i < 3; i++) {
      let index = getRandomNumber(len);
      console.log('index:', index)
      activities.push(arr[index]);
    }
    let activitySet = new Set(activities);
    console.log('activity set:', activitySet);
    if (activitySet.size < 2) {
      getActivities(arr);
    }
    activities = [...activitySet];
    console.log(activities)
    return activities;
  }

  const handleClick = (): void => {
    // We add one so age isn't 0
    setAge(getRandomNumber(25) + 1);
    let newGender = getGender();
    setGender(newGender);
  
    setTitle(getTitle(gender));

    let newName = getName(gender);
    setName(newName);
    let newLikes: string[] = getActivities(likesArr);
    setLikes(newLikes);
    let newDislikes: string[] = getActivities(dislikesArr);
    setDislikes(newDislikes);
    let newLikePhrase = getRandomNumber(likeVerbs.length);
    setLikePhrase(likeVerbs[newLikePhrase]);
    let newDislikePhrase = getRandomNumber(dislikeVerbs.length);
    setDislikePhrase(dislikeVerbs[newDislikePhrase]);
    setSurname(getSurname);
    console.log(newName)
  }

  return (
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

        <p className="info__text">{`Hi, my name is ${name} and I'm ${(age % 10 === 8 || age === 11) ? 'an' : 'a' } ${age}-year-old ${breed}. ${likePhrase} ${formattedLikes}. ${dislikePhrase} ${formattedDislikes}.` }

        </p>

        <button
          className="button"
          onClick={handleClick}
        >
          Catalyze
        </button>

      </section>
    </div>
  );
};

export default MainLogic;
