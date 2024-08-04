import { useRef, useEffect } from 'react';

type ButtonProps = {
  isLoading: boolean;
  label: string;
  handleClick: () => void;
};

const BigButton = ( { isLoading, label, handleClick }: ButtonProps ) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseUp = () => {
    if (buttonRef.current) {
      buttonRef.current.classList.add('button__active-tap');
      buttonRef.current.blur();
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.classList.remove('button__active-tap');
        }
      }, 250);
    }
  };

  const handleTouchStart = () => {
    if (buttonRef.current) {
      buttonRef.current.classList.add('button__active-tap');
    }
  };

  const handleTouchEnd = () => {
    if (buttonRef.current) {
      buttonRef.current.classList.remove('button__active-tap');
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.blur();
        }
      }, 250);
    }
    handleClick();
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('touchstart', handleTouchStart);
      button.addEventListener('touchend', handleTouchEnd);
      return () => {
        button.removeEventListener('touchstart', handleTouchStart);
        button.removeEventListener('touchend', handleTouchEnd);
      }
    }
  }, [])

  return (
    <button
      className='button'
      ref={buttonRef}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      disabled={isLoading}
    >
      {label}
    </button>
  );
};

export default BigButton;
