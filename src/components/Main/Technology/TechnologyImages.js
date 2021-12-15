import PageNavImages from '../../UI/PageNavImages';
import launchWebp from '../../../assets/technology/image-launch-vehicle-portrait.jpg';
import launchWebpLandscape from '../../../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceportWebp from '../../../assets/technology/image-spaceport-portrait.jpg';
import spaceportWebpLandscape from '../../../assets/technology/image-spaceport-landscape.jpg';
import capsuleWebp from '../../../assets/technology/image-space-capsule-portrait.jpg';
import capsuleWebpLandscape from '../../../assets/technology/image-space-capsule-landscape.jpg';
import classes from '../../../styles/Technology/TechnologyImages.module.css';

const TechnologyImages = props => {
  const { paths, currentPath } = props;
  const imgs = [
    [launchWebp, launchWebpLandscape],
    [spaceportWebp, spaceportWebpLandscape],
    [capsuleWebp, capsuleWebpLandscape],
  ];
  const images = paths.map((path, index) => {
    return { path, image: imgs[index] };
  });

  return (
    <PageNavImages
      className={classes.image}
      images={images}
      currentPath={currentPath}
      alt="Vehicle"
      responsive={['min-width: 48.0625em', 'max-width: 48.0625em']}
    />
  );
};

export default TechnologyImages;
