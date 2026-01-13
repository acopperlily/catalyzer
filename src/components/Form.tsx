import { useState } from 'react';

type FormProps = {
  breeds: object;
  handleClick: any;
}

const Form = ({ breeds, handleClick }: FormProps ) => {
  const [draftName, setDraftName] = useState<string>('');
  const [selectedBreed, setSelectedBreed] = useState<string>('rand');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('e from form:', e, draftName);
    handleClick(e, draftName, selectedBreed);
  };

    const handleSelect = (e: any): void => {
    e.preventDefault();
    e.stopPropagation();

    let newBreed = e.target.value;
    console.log('handle change breed:', newBreed);
    setSelectedBreed(newBreed);
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
            onChange={e => handleSelect(e)}
            value={selectedBreed}
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
            Your Name
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
