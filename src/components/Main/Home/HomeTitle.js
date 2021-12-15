import Title from '../../UI/Title';
import classes from '../../../styles/Home/HomeTitle.module.css';

const HomeTitle = props => {
  return <Title className={classes['home-title']}>{props.text}</Title>;
};

export default HomeTitle;
