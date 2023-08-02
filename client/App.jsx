import React from 'react';
// Sample container import MainContainer from './containers/MainContainer.jsx';

import InfoContainer from './containers/infoContainer.jsx';
import MapsOfTotalsContainer from './containers/mapsOfTotalsContainer.jsx';
import UserRateContainer from './containers/userRateContainer.jsx';

const App = () => {
  return(
    <div>
      <InfoContainer/>
      <UserRateContainer/>
      <MapsOfTotalsContainer/>
    </div>
  );
}

export default App;