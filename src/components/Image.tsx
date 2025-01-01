import Loading from './Loading';
import Puddy1 from '/puddy1.webp';
import Puddy2 from '/puddy2.webp';
import Pele1 from '/pele1.webp';
import Pele2 from '/pele2.webp';
import Pele3 from '/pele3.webp';
import Pele4 from '/pele4.webp';
import Leesi1 from '/leesi1.webp';
import Leesi2 from '/leesi2.webp';
import Leesi3 from '/leesi3.webp';
import Drizes1 from '/drizes1.webp';
import Drizes2 from '/drizes2.webp';
import Drizes3 from '/drizes3.webp';

import getRandomNumber from '../utils/getRandomNumber';

type ImageProps = {
  isLoading: boolean,
  error: boolean,
  fade: boolean,
  image: string,
  breed: string
};

const errorImages = [
  Puddy1,
  Puddy2,
  Pele1,
  Pele2,
  Pele3,
  Pele4,
  Leesi1,
  Leesi2,
  Leesi3,
  Drizes1,
  Drizes2,
  Drizes3,
];

const Image = ({ isLoading, error, fade, image, breed }: ImageProps) => {
  let altText = breed === 'Random Breed' ? 'Random' : breed;
  if (error) {
    const index = getRandomNumber(errorImages.length);
    image = errorImages[index];
    altText = 'Random';
  }
  
  return (
    <section className='image__container'>
      {isLoading ? (
        <Loading />
      ) : (
        <img
          src={image}
          className={`${fade ? 'fade-in image' : 'image'}`}
          alt={`${altText} cat`}
        />
      )}
    </section>
  );
};

export default Image;
