import PageNavImages from '../../UI/PageNavImages';
import moonWebp from '../../../assets/destination/image-moon.webp';
import marsWebp from '../../../assets/destination/image-mars.webp';
import europaWebp from '../../../assets/destination/image-europa.webp';
import titanWebp from '../../../assets/destination/image-titan.webp';

const DestinationPlanets = props => {
  const { paths } = props;
  const imgs = [moonWebp, marsWebp, europaWebp, titanWebp];
  const images = paths.map((path, index) => {
    return { path, image: imgs[index] };
  });

  return (
    <PageNavImages
      images={images}
      currentPath={props.currentPlanet}
      alt="Planet"
    />
  );
};

export default DestinationPlanets;
