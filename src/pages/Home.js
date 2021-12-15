import HomeSubtitle from '../components/Main/Home/HomeSubtitle';
import HomeTitle from '../components/Main/Home/HomeTitle';
import HomeParagraph from '../components/Main/Home/HomeParagraph';
import HomeButton from '../components/Main/Home/HomeButton';
import classes from '../styles/Home/Home.module.css';

const HOME_DATA = {
  title: 'Space',
  subtitle: 'So, you want to travel to',
  description:
    'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!',
  button: 'Explore',
};

const Home = () => {
  const { title, subtitle, description, button } = HOME_DATA;

  return (
    <>
      <div className={classes['text-div']}>
        <HomeSubtitle text={subtitle} />
        <HomeTitle text={title} />
        <HomeParagraph text={description} />
      </div>
      <div className={classes['btn-div']}>
        <HomeButton text={button} />
      </div>
    </>
  );
};

export default Home;
