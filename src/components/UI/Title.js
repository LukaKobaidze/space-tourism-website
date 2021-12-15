import classes from '../../styles/UI/Title.module.css';

const Title = props => {
  return (
    <h1 className={`${classes.title} ${props.className}`}>{props.children}</h1>
  );
};

export default Title;
