import Title from '../../UI/Title';
import classes from '../../../styles/Technology/TechnologyTitle.module.css';

const TechnologyTitle = props => {
  return <Title className={classes.title}>{props.text}</Title>;
};

export default TechnologyTitle;
