/*
  This component takes an object & current page path as a prop.
  Object should have url path with corresponding image path.
  For example: 
  props.images = [
    {
      path: path, 
      image: imageUrl1
    },
    {
      path: path2, 
      image: imageUrl2
    },
    {
      path: path3, 
      image: imageUrl3
    }
  ]

  Component also takes 'responsive' prop, if you want to have
  different images for specific viewport size.
  For example:
  props.responsive = [
    'min-width: 48.0625em',
    'max-width: 48.0625em',
  ]
*/

import classes from '../../styles/UI/PageNavImages.module.css';

const PageNavImages = props => {
  const { images, currentPath, responsive, alt } = props;
  const imageClass = props.className ? props.className : '';
  return (
    <>
      {!responsive &&
        images.map(obj => {
          return (
            <img
              src={obj.image}
              className={`${classes['page-img']} ${
                obj.path === currentPath ? classes.show : classes.hide
              } ${imageClass}`}
              alt={alt}
              key={obj.path}
            />
          );
        })}

      {responsive &&
        images.map(obj => {
          return (
            <picture key={obj.path}>
              {responsive.map((mediaQuery, index) => {
                return (
                  <source
                    key={index}
                    srcSet={obj.image[index]}
                    media={`(${mediaQuery})`}
                  />
                );
              })}
              <img
                src={obj[0]}
                alt={alt}
                className={`${classes['page-img']} ${
                  obj.path === currentPath ? classes.show : classes.hide
                } ${imageClass}`}
              />
            </picture>
          );
        })}
    </>
  );
};

export default PageNavImages;
