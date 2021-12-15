import Paragraph from '../../UI/Paragraph';
import classes from '../../../styles/Home/HomeParagraph.module.css';

const HomeParagraph = props => {
  return (
    <Paragraph className={classes['home-paragraph']}>{props.text}</Paragraph>
  );
};

export default HomeParagraph;
