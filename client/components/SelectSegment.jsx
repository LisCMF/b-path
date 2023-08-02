import React from 'react';  
import { useDispatch, useSelector} from 'react-redux';

// import all potential actions
import { selectPathSegment, writePathSegment, rateScenary, rateSafety, rateInfrastructure, updateRate, deleteRate  } from '../actions/actions.js'; 

const SelectSegment = prop => {
    // declare a constant dispatch
    const dispatch = useDispatch();
    // contain the result number after triger event
    const writeCurentSegmentNumber = useSelector(state => state.bpathReducer.writeCurentSegmentNumber); // select the element 

    const curentSegmentNumber = useSelector(state => state.bpathReducer.curentSegmentNumber); // select the element 

    // for the segment selector 
    const handleChangeWrite = (e) => dispatch(writePathSegment(e.target.value));
    const handleChangeSelect = (e) => dispatch(selectPathSegment(e.target.value));

    return(
    <div className='selectSegmentDiv'>
        <label className='rateLabel'>BIKE PATH SEGMENT</label>
        <input id='selectSegment' type='text' name="Bike Path Segment Number" onChange={handleChangeWrite} value={writeCurentSegmentNumber}></input>
        <button id="workOnSegmentButton" onClick={handleChangeSelect}>select</button>
    </div>
    )
}

export default SelectSegment;