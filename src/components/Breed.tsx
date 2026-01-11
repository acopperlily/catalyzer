import { useEffect, useState } from "react";
import getRandomNumber from "../utils/getRandomNumber";

const unknownBreeds: string[] = ['cat', 'kitty', 'kitty cat', 'fur baby', 'furball', 'ball of fur', 'bundle of joy', 'feline'];

const Breed = ({ breed, name }) => {
  const [isRandom, setIsRandom] = useState(breed === 'Random Breed');
  const [randomBreed, setRandomBreed] = useState(unknownBreeds[getRandomNumber(unknownBreeds.length)]);

  useEffect(() => {
    setRandomBreed(unknownBreeds[getRandomNumber(unknownBreeds.length)]);
  }, []);

  return (
    <span>{isRandom ? randomBreed : breed}. </span>
  );
};

export default Breed;
