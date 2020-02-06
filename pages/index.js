import React from 'react';
import Landing from "../components/landing";
import Sell from '../components/sell';
import Mission from '../components/mission';
import Location from '../components/location';
import ComingSoon from '../components/comingsoon';

function Index() {
  return(
    <div>
      <Landing/>
      <Sell/>
      <Mission/>
      <Location/>
      <ComingSoon/>
    </div>
  );
}

export default Index;