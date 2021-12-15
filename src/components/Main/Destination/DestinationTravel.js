import classes from '../../../styles/Destination/DestinationTravel.module.css';

const DestinationTravel = props => {
  return (
    <div className={classes['destination-travel']}>
      <div className={classes.distance}>
        <span className={classes.text}>Avg. Distance</span>
        <span className={classes.num}>{props.distance}</span>
      </div>
      <div className={classes.time}>
        <span className={classes.text}>Est. Travel time</span>
        <span className={classes.num}>{props.travel}</span>
      </div>
    </div>
  );
};

export default DestinationTravel;
