import { useNavigate } from 'react-router-dom';

import classes from '../../../styles/Home/HomeButton.module.css';

const HomeButton = props => {
  const navigate = useNavigate();
  const exporeButtonHandler = () => {
    navigate('/destination', { replace: false });
  };

  return (
    <button className={classes['home-button']} onClick={exporeButtonHandler}>
      {props.text}
    </button>
  );
};

export default HomeButton;
