import Paragraph from '../../UI/Paragraph';
import classes from '../../../styles/Technology/TechnologyParagraph.module.css';

const TechnologyParagraph = props => {
  return <Paragraph className={classes.paragraph}>{props.text}</Paragraph>;
};

export default TechnologyParagraph;
