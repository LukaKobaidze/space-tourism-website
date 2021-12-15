import classes from '../../../styles/Crew/CrewSubtitle.module.css';

const CrewSubtitle = props => {
  return <h2 className={classes.subtitle}>{props.text}</h2>;
};

export default CrewSubtitle;
