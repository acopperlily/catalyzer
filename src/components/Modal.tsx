import Close from '../assets/icons/xmark.svg?react';

type ModalProps = {
  handleClick: () => void;
};

const Modal = ({ handleClick }: ModalProps) => {
  return (
    <div 
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="about"
      tabIndex={-1}
    >
      <button 
        type="button"
        className="modal__icon-container"
        onClick={handleClick}
        aria-label="Close modal"
      >
        <Close className="modal__icon" />
      </button>

      <h3 className="modal__title" id="about">Why Catalyzer?</h3>
      <div className="modal__body">
        <p className=''>Why <em>not</em> Catalyzer? Is there such a thing as having too many cat-themed apps? Use the dropdown menu to select a specific breed or choose a random cat. Click the big, silly button, and your new kitty friend will greet you. Kitty will share a photo, name, age, breed (if applicable), likes and dislikes, and a fun fact. Images courtesy of <a href="https://thecatapi.com" target='_blank' rel='noopener noreferrer'>The Cat API</a>.</p>
      </div>
    </div>
  )
};

export default Modal;
