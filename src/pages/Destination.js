import { useParams } from 'react-router-dom';

import DestinationTitle from '../components/Main/Destination/DestinationTitle';
import DestinationParagraph from '../components/Main/Destination/DestinationParagraph';
import DestinationTravel from '../components/Main/Destination/DestinationTravel';
import DestinationNav from '../components/Main/Destination/DestinationNav';
import DestinationImages from '../components/Main/Destination/DestinationImages';
import classes from '../styles/Destination/Destination.module.css';

const Destination = props => {
  const { planet } = useParams();
  const { data } = props;
  const names = data.map(item => item.name);
  const paths = names.map(name => name.toLowerCase());
  const currentPlanetIndex = data.findIndex(
    item => item.name.toLowerCase() === planet
  );

  return (
    <>
      <div className={classes['destination-img-div']}>
        <DestinationImages currentPlanet={planet} paths={paths} />
      </div>
      <div className={classes['destination-about']}>
        <DestinationNav names={names} />
        <DestinationTitle text={data[currentPlanetIndex].name} />
        <DestinationParagraph text={data[currentPlanetIndex].description} />
        <DestinationTravel
          distance={data[currentPlanetIndex].distance}
          travel={data[currentPlanetIndex].travel}
        />
      </div>
    </>
  );
};

export default Destination;
