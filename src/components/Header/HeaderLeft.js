import classes from '../../styles/Header/HeaderLeft.module.css';
import HeaderLogo from '../Icons/HeaderLogo';
import HeaderLine from './HeaderLine';

const HeaderLeft = () => {
  return (
    <div className={classes['header-left']}>
      <div>
        <HeaderLogo className={classes.logo} />
      </div>
      <div className={classes['line-div']}>
        <HeaderLine />
      </div>
    </div>
  );
};

export default HeaderLeft;
