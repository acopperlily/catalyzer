import Intro from "./Intro";
import Greeting from "./Greeting";
import Age from "./Age";
import Breed from "./Breed";
import Tooltip from "./Tooltip";
import type { Outro } from "../data/types.ts";

type ParaProps = {
  isLoading: boolean;
  fade: boolean;
  countryCode: string;
  username: string;
  name: string;
  age: number;
  breed: string;
  randCat: string;
  desc: string | null;
  outro: Outro;
  greeting: string;
  language: string;
  intro: string;
  likes: string;
  dislikes: string;
};

const Paragraph = ({ isLoading, fade, countryCode, username, name, age, breed, randCat, desc, outro, greeting, language, intro, likes, dislikes }: ParaProps) => {

  console.log('country code:', countryCode);
  let classes: string = 'info__para';
  if (fade) classes += ' fade-in';
  if (isLoading) classes += ' hidden';

  console.log('outro:', outro);
  const quote = outro.quote;
  const attribution = outro.origin;

  return (
    <p 
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

      <Breed breed={breed} randCat={randCat} description={desc} />

      <>{likes} {dislikes}</>
      
      <Tooltip content={attribution} children={quote} className="quote"/>
    </p>
  );
};

export default Paragraph;
