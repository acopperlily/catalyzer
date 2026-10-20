import Intro from "./Intro";
import Greeting from "./Greeting";
import Age from "./Age";
import Breed from "./Breed";
import Tooltip from "./Tooltip";
import type { ParaProps } from "../data/types";

const Paragraph = ({ isLoading, fade, username, name, age, breed, randCat, breedInfo, outro, greeting, language, intro, likes, dislikes }: ParaProps) => {

  
  let classes: string = 'info__para';
  if (fade) classes += ' fade-in';
  if (isLoading) classes += ' hidden';

  console.log('breedInfo Obj', breedInfo);

  console.log('outro:', outro);

  const [quote, attribution] = Object.values(outro);

  return (
    <div 
      className={classes}
    > 
      <Greeting
        greeting={greeting} 
        language={language} 
        username={username} 
      />

      <Intro 
        intro={intro}
        name={name} 
      />

      <Age age={age} />

      <Breed 
        breed={breed} 
        randCat={randCat} 
        breedInfo={breedInfo}
      />

      <>{likes} {dislikes}</>
      
      <Tooltip 
        content={attribution} 
        children={quote} 
        className="quote"
      />

    </div>
  );
};

export default Paragraph;
