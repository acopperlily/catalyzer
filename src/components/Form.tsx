import { useState } from 'react';

type FormProps = {
  breeds: object;
  selectedBreed: string;
  isRandom: boolean;
  handleClick: any;
  handleChange: any;
}

const Form = ({ breeds, selectedBreed, isRandom, handleClick, handleChange }: FormProps ) => {
  const [draftName, setDraftName] = useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // onSubmit(draftName);
    console.log('e from form:', e, draftName);
    handleClick(e, draftName);
  };

  return (
    <form
      action=""
      className="form"
      onSubmit={handleSubmit}
    >
      <div className="form__inputs">
        <div className="form__group">
          <label
            htmlFor="breeds"
            id="dropdown__label"
            className="form__label"
          >
            Choose Breed
          </label>
          <select
            name="breeds"
            id="breeds"
            className="form__select form__input"
            onChange={e => handleChange(e)}
            value={isRandom ? 'rand' : selectedBreed}
          >
            {(Object.entries(breeds)).map(([id, name]): React.ReactNode => (
              <option key={id} value={id} className="form__option">{name}</option>
            ))}
          </select>
        </div>
        <div className="form__group">
          <label
            htmlFor="username"
            className="form__label"
          >
            Your Name (Optional)
          </label>
          <input
            type="text"
            id="username"
            className="form__input"
            maxLength={30}
            onChange={e => setDraftName(e.target.value)}
            value={draftName}
            placeholder="Case Sensitive"
          />
        </div>
      </div>

      <button
        type="submit"
        className="button"
        id="button"
      >
        Catalyze
      </button>

    </form>
  );
};

export default Form;
