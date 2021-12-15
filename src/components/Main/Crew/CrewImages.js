import PageNavImages from '../../UI/PageNavImages';
import commanderWebp from '../../../assets/crew/image-douglas-hurley.webp';
import specialistWebp from '../../../assets/crew/image-mark-shuttleworth.webp';
import pilotWebp from '../../../assets/crew/image-victor-glover.webp';
import engineerWebp from '../../../assets/crew/image-anousheh-ansari.webp';
import classes from '../../../styles/Crew/CrewImages.module.css';

const CrewImages = props => {
  const { paths, currentPath } = props;
  const imgs = [commanderWebp, specialistWebp, pilotWebp, engineerWebp];
  const images = paths.map((path, index) => {
    return { path, image: imgs[index] };
  });
  return (
    <PageNavImages
      className={classes['crew-images']}
      images={images}
      currentPath={currentPath}
      alt="Member"
    />
  );
};

export default CrewImages;
