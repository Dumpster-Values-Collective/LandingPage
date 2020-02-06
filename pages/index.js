import React from 'react';
import Landing from "../components/landing";
import Sell from '../components/sell';
import Mission from '../components/mission';
import Location from '../components/location';
import ComingSoon from '../components/comingsoon';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Reset from '../src/style/ResetCSS';
import Theme from '../src/style/theme';

export const GlobalStyle = createGlobalStyle`
    ${Reset}
`;

function Index() {
  return(
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
          <Landing/>
          <Sell/>
          <Mission/>
          <Location/>
          <ComingSoon/> 
      </ThemeProvider>
    </>
  );
}

export default Index;