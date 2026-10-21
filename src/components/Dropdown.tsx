import { memo } from 'react';
import type { BreedsObject } from '../data/types';


const DropdownList = ({list}: BreedsObject) => {

  const dropdown: string[][] = Object.entries(list);
  dropdown[0] = ['rand', '-- Random Breed --'];

  console.log('dropdown render');
  console.log('type', typeof list);

  return (
    <>
    {dropdown.map((a: string[], i: number) => (
      <option 
        key={i} 
        value={a[0]} 
        className="form__option"
        >
          {a[1]}
      </option>
      ))
    }
    </>
  );
};

export const Dropdown = memo(DropdownList);

