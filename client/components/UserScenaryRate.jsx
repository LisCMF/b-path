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

const UserScenaryRate = prop => {
    // declare a constant dispatch
    const dispatch = useDispatch();
    // contain the result number after triger event
    const individualScenaryRate = useSelector(state => state.bpathReducer.individualScenaryRate); // select the element 
    // for the segment selector // const handleChange = (e) => dispatch(newLoactionActionCreator(e.target.value));
    
    //function that dispatch an action
    const handleChange1 = () => dispatch(rateScenary(1));
    const handleChange2 = () => dispatch(rateScenary(2));
    const handleChange3 = () => dispatch(rateScenary(3));
    const handleChange4 = () => dispatch(rateScenary(4));
    const handleChange5 = () => dispatch(rateScenary(5));

    return(
        <div className='rate1to5'>            
            <div className='rateLabel'>Scenery Rate</div>
            <button className='rateButton' onClick={handleChange1}>1</button>
            <button className='rateButton' onClick={handleChange2}>2</button>
            <button className='rateButton' onClick={handleChange3}>3</button>
            <button className='rateButton' onClick={handleChange4}>4</button>
            <button className='rateButton' onClick={handleChange5}>5</button>
            <div className='rateLabel'>-{individualScenaryRate}-</div>
        </div>
    )
}


export default UserScenaryRate;
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