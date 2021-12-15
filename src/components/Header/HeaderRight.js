import useWindowDimensions from '../../hooks/useWindowDimensions';
import Navigation from '../Navigation/Navigation';
import IconHamburger from '../Icons/IconHamburger';
import classes from '../../styles/Header/HeaderRight.module.css';

const HeaderRight = props => {
  const { width } = useWindowDimensions();

  const breakpoint = 600;
  return (
    <>
      {width > breakpoint && <Navigation />}
      {width <= breakpoint && (
        <IconHamburger className={classes.icon} onClick={props.showSideNav} />
      )}
    </>
  );
};

export default HeaderRight;
