import Title from '../../UI/Title';
import classes from '../../../styles/Destination/DestinationTitle.module.css';

const DestinationTitle = props => {
  return <Title className={classes['destination-title']}>{props.text}</Title>;
};

export default DestinationTitle;
