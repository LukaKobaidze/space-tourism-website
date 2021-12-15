import { NavLink } from 'react-router-dom';
import classes from '../../styles/Navigation/Navigation.module.css';

const Navigation = () => {
  const linkActiveClass = navData => {
    return navData.isActive ? classes.active : '';
  };

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink className={linkActiveClass} to="/home">
            <span className={classes['nav-link-num']}>00</span> HOME
          </NavLink>
        </li>
        <li>
          <NavLink className={linkActiveClass} to="/destination">
            <span className={classes['nav-link-num']}>01</span> DESTINATION
          </NavLink>
        </li>
        <li>
          <NavLink className={linkActiveClass} to="/crew">
            <span className={classes['nav-link-num']}>02</span> CREW
          </NavLink>
        </li>
        <li>
          <NavLink className={linkActiveClass} to="/technology">
            <span className={classes['nav-link-num']}>03</span> TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
