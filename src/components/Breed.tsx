import Tooltip from "./Tooltip";

type BreedProps = { breed: string, randCat: string, description: string | null }

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
