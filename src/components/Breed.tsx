// import { useEffect, useState } from "react";
import chooseItem from "../utils/chooseItem";

type BreedProps = { breed: string }

const unknownBreeds: string[] = ['cat', 'kitty', 'kitty cat', 'fur baby', 'furball', 'ball of fur', 'bundle of joy', 'feline'];

const Breed = ({ breed }: BreedProps) => {

  const newBreed = breed === 'Random Breed' ? chooseItem(unknownBreeds) : breed;

  return (
    <>{` ${newBreed}. `}</>
  );
};

export default Breed;
