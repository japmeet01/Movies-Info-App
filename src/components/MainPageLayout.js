import React from 'react';
import Nav from './Nav';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title title="Box Office" subTitle="Looking for a movie or Actor??" />
      <Nav />
      {children}
    </div>
  );
};

export default MainPageLayout;
