import Paragraph from '../../UI/Paragraph';
import classes from '../../../styles/Crew/CrewParagraph.module.css';

const CrewParagraph = props => {
  return <Paragraph className={classes.paragraph}>{props.text}</Paragraph>;
};

export default CrewParagraph;
