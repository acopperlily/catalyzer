import Tooltip from "./Tooltip";
import type { BreedProps } from "../data/types";

const Breed = ({ breed, randCat, breedInfo }: BreedProps) => {

  const newBreed = breed === 'Random Breed' ? randCat : breed;

  // let description = breedInfo?.description;
  // let history = breedInfo?.history;

  let description;
  let history;

  if (breedInfo) {
    [description, history] = Object.values(breedInfo);
  }

  // let [description, history] = [...breedInfo];
  
  // if (!description?.endsWith('.')) {
  //   description += '.'
  // }

  // console.log('obj in Breed', Object.entries(breedInfo))

  return (
    <>{breed === 'Random Breed' ? (
      <>{` ${newBreed}. `}</>
        ) : (
        <Tooltip 
          content={`${description}\n\n${history}`} 
          children={` ${newBreed}. `} 
          className="breed" 
        />)
      }
    </>
  );
};

export default Breed;
