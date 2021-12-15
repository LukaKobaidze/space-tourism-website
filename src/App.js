import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

import Backdrop from './components/UI/Backdrop';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import useWindowDimensions from './hooks/useWindowDimensions';
import SideNavigation from './components/Navigation/SideNavigation';

const changeTheme = page => {
  const body = document.body;
  const bodyClassList = [...body.classList];
  body.classList.remove(...bodyClassList);
  body.classList.add(`body--${page}`);
};

function App() {
  const location = useLocation();
  const page = location.pathname.split('/')[1];
  const { width } = useWindowDimensions();
  const [isSideNavShown, setIsSideNavShown] = useState(false);

  const showSideNavHandler = () => {
    setIsSideNavShown(true);
  };

  const hideSideNavHandler = () => {
    setIsSideNavShown(false);
  };

  useEffect(() => {
    setIsSideNavShown(false);
    changeTheme(page);
  }, [page]);

  return (
    <>
      <Backdrop />
      <Header showSideNav={showSideNavHandler} />
      {width <= 600 && <SideNavigation hideSideNav={hideSideNavHandler} isSideNavShown={isSideNavShown} />}
      <Main currentPage={page} />
    </>
  );
}

export default App;
