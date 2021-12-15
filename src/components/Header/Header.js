import classes from '../../styles/Header/Header.module.css';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = props => {
  return (
    <header className={classes.header}>
      <HeaderLeft />
      <HeaderRight showSideNav={props.showSideNav} />
    </header>
  );
};

export default Header;
