import getRandomNumber from "../utils/getRandomNumber";

// Convert numerals to words
const nums: string[] = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six'];

const unknownBreeds: string[] = ['cat', 'kitty', 'kitty cat', 'fur baby', 'furball', 'ball of fur', 'bundle of joy', 'feline'];

type ParaProps = {
  isLoading: boolean;
  fade: boolean;
  intro: string;
  name: string;
  age: number;
  breed: string;
  likePhrase: string;
  dislikePhrase: string;
  likes: string[];
  dislikes: string[];
  outro: string;
};

const Paragraph = ({ isLoading, fade, intro, name, age, breed, likePhrase, dislikePhrase, likes, dislikes, outro }: ParaProps) => {

  let classes = 'info__para';
  if (fade) classes += ' fade-in';
  if (isLoading) classes += ' hidden';

  // Change age from number to words, add appropriate article
  let formattedAge = 'a';
  if (age % 10 === 8 || age === 11) formattedAge += 'n';
  formattedAge += ` ${nums[age]}-year-old`;

  // Randomly select synonym for "cat" if breed is unknown
  if (breed === 'Random Breed') {
    breed = unknownBreeds[getRandomNumber(unknownBreeds.length)];
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
      {`${intro} ${name}, and I'm ${formattedAge} ${breed}. ${likePhrase} ${formattedLikes}. ${dislikePhrase} ${formattedDislikes}. ${outro}` }
    </p>
  );
}

export default Paragraph;
