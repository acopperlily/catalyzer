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

      <h3 className="modal__title">Welcome to Catalyzer!</h3>
    </div>
  )
};

export default Modal;
