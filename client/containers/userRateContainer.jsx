import React from 'react';
import { useSelector } from 'react-redux';
import UserSafetyRate from '../components/UserSafetyRate.jsx';
import UserScenaryRate from '../components/UserScenaryRate.jsx';
import UserInfrastructureRate from '../components/UserInfrastrutureRate.jsx';
import SelectSegment from '../components/SelectSegment.jsx';


const UserRateContainer = (prop) => {
  return(
    <div className='userRateContainer'>
        <SelectSegment/>
        <UserSafetyRate/>
        <UserScenaryRate/>
        <UserInfrastructureRate/>
    </div>
  );
}

export default UserRateContainer;