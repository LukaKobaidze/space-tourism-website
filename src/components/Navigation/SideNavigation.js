import { useEffect } from 'react';
import Navigation from './Navigation';
import IconClose from '../Icons/IconClose';
import classes from '../../styles/Navigation/SideNavigation.module.css';

const SideNavigation = props => {
  const classShowSidebar = props.isSideNavShown ? classes.active : '';

  useEffect(() => {
    const handler = event => {
      if (!event.target.closest('#sidenav')) {
        props.hideSideNav();
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div id="sidenav" className={`${classes.sidenav} ${classShowSidebar}`}>
      <IconClose
        className={classes['icon-close']}
        onClick={props.hideSideNav}
      />
      <Navigation />
    </div>
  );
};

export default SideNavigation;
