import { Routes, Route, Navigate } from 'react-router-dom';
import data from '../../data/data.json';

import PageNumber from '../PageNumber';
import Home from '../../pages/Home';
import Destination from '../../pages/Destination';
import Crew from '../../pages/Crew';
import Technology from '../../pages/Technology';
import classes from '../../styles/Main.module.css';

const Main = props => {
  const {
    destinations: destinationData,
    crew: crewData,
    technology: technologyData,
  } = data;
  return (
    <>
      {props.currentPage !== 'home' && (
        <PageNumber currentPage={props.currentPage} />
      )}
      <main className={classes[`main--${props.currentPage}`]}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/destination"
            element={<Navigate replace to="/destination/moon" />}
          />
          <Route
            path="/destination/:planet"
            element={<Destination data={destinationData} />}
          />
          <Route
            path="/crew"
            element={<Navigate replace to="/crew/commander" />}
          />
          <Route path="/crew/:member" element={<Crew data={crewData} />} />
          <Route
            path="/technology"
            element={<Navigate repalce to="/technology/launch-vehicle" />}
          />
          <Route
            path="/technology/:vehicle"
            element={<Technology data={technologyData} />}
          />
        </Routes>
      </main>
    </>
  );
};

export default Main;
