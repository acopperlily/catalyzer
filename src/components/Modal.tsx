import Exit from '../assets/icons/exit.svg?react';

type ModalProps = {
  handleClick: () => void;
};

const Modal = ({ handleClick }: ModalProps) => {
  return (
    <div className="modal">
      <div 
        className="modal__icon-container"
        onClick={handleClick}
      >
        <Exit className="modal__icon" />
      </div>

      <h3 className="modal__title">Why Catalyzer?</h3>
      <div className="modal__body">
        <p className=''>Why <em>not</em> Catalyzer? Is there such a thing as having too many cat-themed apps?</p>
      </div>
    </div>
  )
};

export default Modal;
