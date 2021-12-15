import PageNav from '../../UI/PageNav';
import classes from '../../../styles/Crew/CrewNav.module.css';

const CrewNav = props => {
  const { members } = props;

  const memberLinkActive = navData => {
    return navData.isActive ? classes['link-circle--active'] : '';
  };

  const navLinkElement = <div className={classes['link-circle']}></div>;

  return (
    <PageNav
      className={classes['crew-nav']}
      page="crew"
      content={members.map(member => {
        return {
          path: member,
          active: memberLinkActive,
          element: navLinkElement,
        };
      })}
    />
  );
};

export default CrewNav;
