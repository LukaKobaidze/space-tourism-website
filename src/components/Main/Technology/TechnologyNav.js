import PageNav from '../../UI/PageNav';
import classes from '../../../styles/Technology/TechnologyNav.module.css';

const TechnologyNav = props => {
  const navElementActive = navData => {
    return navData.isActive ? classes.active : '';
  };

  return (
    <PageNav
      className={classes['technology-nav']}
      page="technology"
      content={props.paths.map((name, index) => {
        return {
          path: name.split(' ').join('-'),
          active: navElementActive,
          element: <div>{index + 1}</div>,
        };
      })}
    />
  );
};

export default TechnologyNav;
