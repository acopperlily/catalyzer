import Tooltip from "./Tooltip";
import type { BreedProps } from "../data/types";

const Breed = ({ breed, randCat, description, history }: BreedProps) => {

  const newBreed = breed === 'Random Breed' ? randCat : breed;
  
  if (!description?.endsWith('.')) {
    description += '.'
  }

  description += '\n'

  return (
    <>{breed === 'Random Breed' ? (
      <>{` ${newBreed}. `}</>
        ) : (
        <Tooltip 
          content={`${description}\n${history}`} 
          children={` ${newBreed}. `} 
          className="breed" 
        />)
      }
    </>
  );
};

export default Breed;
