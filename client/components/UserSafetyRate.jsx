import React from 'react';  
import { useDispatch, useSelector} from 'react-redux';
// add actions to be use
// selectPathSegment 
// rateScenary  
// rateSafety   
// rateInfrastructure  
// updateRate 
// deleteRate 
import { selectPathSegment, rateScenary, rateSafety, rateInfrastructure, updateRate, deleteRate  } from '../actions/actions.js'; 

const UserSafetyRate = prop => {
    // declare a constant dispatch
    const dispatch = useDispatch();
    // contain the result number after triger event
    // const individualScenaryRate = useSelector(state => state.markets.newLocation);
    // for the segment selector // const handleChange = (e) => dispatch(newLoactionActionCreator(e.target.value));
    
    //function that dispatch an action
    const handleChange1 = (e) => dispatch(rateSafety(1));
    const handleChange2 = (e) => dispatch(rateSafety(2));
    const handleChange3 = (e) => dispatch(rateSafety(3));
    const handleChange4 = (e) => dispatch(rateSafety(4));
    const handleChange5 = (e) => dispatch(rateSafety(5));

    return(
        <div className='rate1to5'>
            <div className='rateLabel'>Safety Rate</div>
            <button className='rateButton' onClick={handleChange1}>1</button>
            <button className='rateButton' onClick={handleChange2}>2</button>
            <button className='rateButton' onClick={handleChange3}>3</button>
            <button className='rateButton' onClick={handleChange4}>4</button>
            <button className='rateButton'onClick={handleChange5}>5</button>
        </div>
    )
}


export default UserSafetyRate;
/*
 const intialState = {
    individualScenaryRate : 0.00,
    individualSafetyRate : 0.00,
    individualInfrastructureRate : 0.00,
    curentSegmentNumber : null,
    overallScenaryRate : 0.00,
    overallSafetyRate : 0.00,
    overallInfrastructureRate : 0.00,
  }

*/