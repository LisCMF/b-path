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
    const individualScenaryRate = useSelector(state => state.markets.newLocation);
    // for the segment selector // const handleChange = (e) => dispatch(newLoactionActionCreator(e.target.value));
    
    //function that dispatch an action
    const handleChange = (e) => dispatch(rateSafety(e));

    return(
        <div className='rate1to5'>
        </div>
    )
}


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