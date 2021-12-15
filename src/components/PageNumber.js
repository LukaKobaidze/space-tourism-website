import { useState, useEffect } from 'react';

import classes from '../styles/PageNumber.module.css';

const PageNumber = props => {
  const [pageNumberChanging, setPageNumberChanging] = useState(false);
  const { currentPage } = props;
  const pageNum =
    currentPage === 'destination'
      ? 1
      : currentPage === 'crew'
      ? 2
      : currentPage === 'technology'
      ? 3
      : 0;

  useEffect(() => {
    setPageNumberChanging(true);
    const timeout = setTimeout(() => {
      setPageNumberChanging(false);
    }, 750);

    return () => clearTimeout(timeout);
  }, [currentPage]);

  const numberActiveStyle = {
    transform: `translateY(${-116 + (pageNum - 1) * 58}px)`,
  };

  return (
    <div className={classes['page-number']}>
      <div className={classes.number}>
        <span>0</span>
        <div className={classes['number--current']} style={numberActiveStyle}>
          <span>3</span>
          <span>2</span>
          <span>1</span>
        </div>
      </div>
      <div className={classes.text}>
        <div
          className={`${classes.border} ${
            pageNumberChanging && classes['border--active']
          }`}
        ></div>
        <div className={classes['text--current']}>
          <span
            className={
              currentPage === 'destination' ? classes['text--active'] : ''
            }
          >
            PICK YOUR DESTINATION
          </span>
          <span
            className={currentPage === 'crew' ? classes['text--active'] : ''}
          >
            MEET YOUR CREW
          </span>
          <span
            className={
              currentPage === 'technology' ? classes['text--active'] : ''
            }
          >
            SPACE LAUNCH 101
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageNumber;
