import Title from '../../UI/Title';
import classes from '../../../styles/Crew/CrewTitle.module.css';

const CrewTitle = props => {
  return <Title className={classes.title}>{props.text}</Title>;
};

export default CrewTitle;
