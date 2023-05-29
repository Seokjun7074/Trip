import Header from 'components/organisms/Header';
import { HomeWrapper } from './style';
import GridBox from 'components/organisms/GridBox';
import React from 'react';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <HomeWrapper>
        <GridBox />
      </HomeWrapper>
    </React.Fragment>
  );
};
export default Home;
