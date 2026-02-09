import Tooltip from "./Tooltip";
import type { BreedProps } from "../data/types";

const Breed = ({ breed, randCat, description }: BreedProps) => {

  const newBreed = breed === 'Random Breed' ? randCat : breed;
  
  if (!description?.endsWith('.')) {
    description += '.'
  }

  return (
    <>{breed === 'Random Breed' ? (
      <>{` ${newBreed}. `}</>
        ) : (
        <Tooltip 
          content={description} 
          children={` ${newBreed}. `} 
          className="breed" 
        />)
      }
    </>
  );
};

export default Breed;
