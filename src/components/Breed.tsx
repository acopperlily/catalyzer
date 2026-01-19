import Tooltip from "./Tooltip";
import chooseItem from "../utils/chooseItem";

type BreedProps = { breed: string, description: string | null }

const unknownBreeds: string[] = ['cat', 'kitty', 'kitty cat', 'fur baby', 'furball', 'ball of fur', 'bundle of joy', 'feline'];

const Breed = ({ breed, description }: BreedProps) => {

  const newBreed = breed === 'Random Breed' ? chooseItem(unknownBreeds) : breed;
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
