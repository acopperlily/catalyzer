import { useEffect, useMemo, useState } from "react";
import chooseItem from "../utils/chooseItem";

import intros from "../data/intros";
import outros from "../data/outros";

import { likeVerbs, dislikeVerbs } from "../data/verbs";

// Convert numerals to words
const nums: string[] = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six'];

const unknownBreeds: string[] = ['cat', 'kitty', 'kitty cat', 'fur baby', 'furball', 'ball of fur', 'bundle of joy', 'feline'];

type ParaProps = {
  isLoading: boolean;
  fade: boolean;
  username: string;
  name: string;
  age: number;
  breed: string;
  likes: string[];
  dislikes: string[];
};

const Paragraph = ({ isLoading, fade, username, name, age, breed, likes, dislikes }: ParaProps) => {

  let classes: string = 'info__para';
  if (fade) classes += ' fade-in';
  if (isLoading) classes += ' hidden';

  // Map username to greetings
  const greetings = useMemo(() => intros(username), [username]);
  const [greeting, setGreeting] = useState<string>('');
  const [outro, setOutro] = useState<string>('');
  const [likesPhrase, setLikesPhrase] = useState<string>('');
  const [dislikesPhrase, setDislikesPhrase] = useState<string>('');

  // Choose greeting
  useEffect(() => {
    setGreeting(chooseItem(greetings));
    setOutro(chooseItem(outros));
    setLikesPhrase(chooseItem(likeVerbs));
    setDislikesPhrase(chooseItem(dislikeVerbs));
  }, [name]);

  // Change age from number to words, add appropriate article
  let formattedAge: string = 'a';
  if (age % 10 === 8 || age === 11) formattedAge += 'n';
  formattedAge += ` ${nums[age]}-year-old`;

  // Randomly select synonym for "cat" if breed is unknown
  if (breed === 'Random Breed') {
    breed = chooseItem(unknownBreeds);
  }

  // Connect array elements into a coherent string
  const formatActivities = (arr: string[], conj: string): string => {

    // This shouldn't happen, but just in case...
    if (arr.length < 2) return arr[0] || 'stuff';

    // Add 'and' or 'or' only
    if (arr.length === 2) return `${arr[0]} ${conj} ${arr[1]}`;

    // Oxford comma, bitch
    return `${arr.slice(0, -1).join(', ')}, ${conj} ${arr.slice(-1)}`;
  };

  // Form coherent sentences for our component
  const formattedLikes: string = formatActivities(likes, 'and');
  const formattedDislikes: string = formatActivities(dislikes, 'or');

  return (
    <p 
      className={classes}
    > 
      {`${greeting} ${name}, and I'm ${formattedAge} ${breed}. ${likesPhrase} ${formattedLikes}. ${dislikesPhrase} ${formattedDislikes}. ${outro}` }
    </p>
  );
};

export default Paragraph;
