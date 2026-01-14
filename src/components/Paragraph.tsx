import { useEffect, useMemo, useState } from "react";

import Age from "./Age";
import Breed from "./Breed";
import Preferences from "./Preferences";

import intros from "../data/intros";
import outros from "../data/outros";

import { likesArr, dislikesArr } from "../data/activities";
import { likeVerbs, dislikeVerbs } from "../data/verbs";

import chooseItem from "../utils/chooseItem";
import getRandomNumber from "../utils/getRandomNumber";

// Constants to balance number of likes & dislikes
const VALUE1: number = 2;
const VALUE2: number = 3;

type ParaProps = {
  isLoading: boolean;
  fade: boolean;
  username: string;
  name: string;
  age: number;
  breed: string;
};

const Paragraph = ({ isLoading, fade, username, name, age, breed }: ParaProps) => {

  let classes: string = 'info__para';
  if (fade) classes += ' fade-in';
  if (isLoading) classes += ' hidden';

  // Map username to greetings
  const greetings = useMemo(() => intros(username), [username]);

  const [greeting, setGreeting] = useState<string>('');

  // Stuff
  useEffect(() => {
    setGreeting(chooseItem(greetings));
  }, [name]);

  // Generate random numbers for our component
  const coinFlip: number = getRandomNumber(2);
  const likesNum: number = [VALUE1, VALUE2][coinFlip];
  const dislikesNum: number = [VALUE2, VALUE1][coinFlip];

  const outro = chooseItem(outros);

  return (
    <p 
      className={classes}
    > 
      {`${greeting} ${name}, and I'm `}

      <Age age={age} />
      
      <Breed breed={breed} />
      
      <Preferences 
        verbs={likeVerbs} 
        prefs={likesArr} 
        conj="and" 
        n={likesNum} 
      /> 
      
      <Preferences 
        verbs={dislikeVerbs} 
        prefs={dislikesArr} 
        conj="or" 
        n={dislikesNum}
      /> 
      
      {outro}
    </p>
  );
};

export default Paragraph;
