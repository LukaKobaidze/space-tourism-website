import PageNav from '../../UI/PageNav';
import classes from '../../../styles/Destination/DestinationNav.module.css';

const DestinationNav = props => {
  const planets = props.names;

  const planetLinkActive = navData => {
    return navData.isActive ? classes['destination-nav--active'] : '';
  };

  return (
    <PageNav
      className={classes['destination-nav']}
      page="destination"
      content={planets.map(planet => {
        return { path: planet, active: planetLinkActive, element: planet };
      })}
    />
  );
};

export default DestinationNav;
