import { useParams } from 'react-router-dom';
import TechnologyNav from '../components/Main/Technology/TechnologyNav';
import TechnologyTitle from '../components/Main/Technology/TechnologyTitle';
import TechnologyParagraph from '../components/Main/Technology/TechnologyParagraph';
import TechnologyImages from '../components/Main/Technology/TechnologyImages';
import classes from '../styles/Technology/Technology.module.css';

const Technology = props => {
  const { data } = props;
  const { vehicle } = useParams();

  const names = data.map(item => item.name);
  const paths = names.map(path => path.split(' ').join('-').toLowerCase());
  const currentVehicleIndex = names.findIndex(
    name => name.toLowerCase() === vehicle.split('-').join(' ')
  );

  const currentData = data[currentVehicleIndex];

  return (
    <>
      <div className={classes['div--1']}>
        <div className={classes['nav-div']}>
          <TechnologyNav paths={paths} />
        </div>
        <div className={classes['text-div']}>
          <h2 className={classes['terminology--h2']}>The terminology...</h2>
          <TechnologyTitle text={currentData.name} />
          <TechnologyParagraph text={currentData.description} />
        </div>
      </div>
      <div className={classes['img-div']}>
        <TechnologyImages paths={paths} currentPath={vehicle} />
      </div>
    </>
  );
};

export default Technology;
