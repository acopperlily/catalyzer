type AgeProps = { age: number }

// Convert numerals to words
const nums: string[] = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two'];

const Age = ({ age }: AgeProps ) => {

  // Change age from number to words, add appropriate article
  let formattedAge: string = 'a';
  if (age % 10 === 8 || age === 11) formattedAge += 'n';
  formattedAge += ` ${nums[age]}-year-old`;

  return (
    <>{formattedAge}</>
  );
};

export default Age;
