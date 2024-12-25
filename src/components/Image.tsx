import Loading from './Loading';
import Puddy from '/puddy.jpg';
import Pele from '/pele.jpg';
import Pele1 from '/pele1.jpg';
import Pele2 from '/pele2.jpg';
import Pele3 from '/pele3.jpg';
import Leesi from '/leesi.jpg';
import Leesi1 from '/leesi1.jpg';
import Leesi2 from '/leesi2.jpg';
import Drizes from '/drizes.jpg';
import Drizes1 from '/drizes1.jpg';
import Drizes2 from '/drizes2.jpg';
import getRandomNumber from '../utils/getRandomNumber';

type ImageProps = {
  isLoading: boolean,
  error: boolean,
  fade: boolean,
  image: string,
};

const errorImages = [
  Puddy,
  Pele,
  Pele1,
  Pele2,
  Pele3,
  Leesi,
  Leesi1,
  Leesi2,
  Drizes,
  Drizes1,
  Drizes2
];

const Image = ({ isLoading, error, fade, image }: ImageProps) => {
  if (error) {
    const index = getRandomNumber(errorImages.length);
    image = errorImages[index];
  }
  
  return (
    <section className='image__container'>
      {isLoading ? (
        <Loading />
      ) : (
        <img
          src={image}
          className={`${fade ? 'fade-in image' : 'image'}`}
        />
      )}
    </section>
  );
};

export default Image;
