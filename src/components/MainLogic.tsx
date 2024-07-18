import { useState, useEffect } from 'react';
import Pele from '../assets/pele.jpg';
import { neutralNames, femaleNames, maleNames } from '../utils/names';
import { neutralTitles, femaleTitles, maleTitles } from '../utils/titles';

const MainLogic = () => {
  const [name, setName] = useState<string>('Pele');
  const [age, setAge] = useState<number>(14);
  const [breed, setBreed] = useState<string>('Domestic Semifloof');
  const [gender, setGender] = useState<string>('f');
  const [title, setTitle] = useState<string>('Princess');

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

  const handleClick = (): void => {
    // We add one so age isn't 0
    setAge(getRandomNumber(25) + 1);
    let newGender = getGender();
    setGender(newGender);
  
    setTitle(getTitle(gender));

    let newName = getName(gender);
    setName(newName);
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

        <div className="info__wrapper">
          <span className="info__label">Name</span>
          <p className="info__text">{title} {name}</p>
        </div>

        <div className="info__wrapper">
          <span className="info__label">Age</span>
          <p className="info__text">{age}</p>
        </div>

        <div className="info__wrapper">
          <span className="info__label">Breed</span>
          <p className="info__text">{breed}</p>
        </div>

        <p className="info__text">{`Hi, my name is ${name} and I'm ${age % 10 === 8 ? 'an' : 'a' } ${age}-year-old ${breed}.` }

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
