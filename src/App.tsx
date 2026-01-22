import { useState } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import MainLogic from './components/MainLogic.tsx';
import Modal from './components/Modal.tsx';
import './styles/main.scss';

function App() {

  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const handleModalClick = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <div className='app'>

      {toggleModal && <Modal handleClick={handleModalClick} /> }


      <div 
        inert={toggleModal}
        className="wrapper"
        style={toggleModal
          ? {filter: 'brightness(20%)'}
          : {filter: 'none'}
        }
        onClick={toggleModal ? handleModalClick : undefined}
      >

        <Header handleClick={handleModalClick} />
        <MainLogic />
        <Footer />

      </div>
    </div>
  );
}

export default App;
