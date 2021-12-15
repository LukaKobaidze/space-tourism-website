import Paragraph from '../../UI/Paragraph';
import classes from '../../../styles/Destination/DestinationParagraph.module.css';

const DestinationParagraph = props => {
  return (
    <Paragraph className={classes['destination-p']}>{props.text}</Paragraph>
  );
};

export default DestinationParagraph;
