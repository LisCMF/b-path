import React from 'react';
import { useSelector } from 'react-redux';
import TotalPerSegment from '../components/TotalPerSegment.jsx';


const MapsOfTotalsContainer = (prop) => {
  return(
    <div className='mapsOfTotalsContainer'>
      <div className='mapFrame'>
        <iframe width="500px" title="New York City Bike Routes" height="500px" src="https://data.cityofnewyork.us/w/7vsa-caz7/25te-f2tw?cur=I_ZA6AQgehn&from=root" frameBorder="0"scrolling="no"></iframe>
      </div>
      <TotalPerSegment/>
    </div>
  );
}

export default MapsOfTotalsContainer;