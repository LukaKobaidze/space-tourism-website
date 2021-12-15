import classes from '../../../styles/Home/HomeSubtitle.module.css';

const HomeSubtitle = props => {
  return <h2 className={classes['home-subtitle']}>{props.text}</h2>;
};

export default HomeSubtitle;
