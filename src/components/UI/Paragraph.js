import classes from '../../styles/UI/Paragraph.module.css';

const Paragraph = props => {
  return (
    <p className={`${classes.paragraph} ${props.className}`}>
      {props.children}
    </p>
  );
};

export default Paragraph;
