import React from 'react';  
import { useDispatch, useSelector} from 'react-redux';
// add actions to be use
// selectPathSegment 
// rateScenary  
// rateSafety   
// rateInfrastructure  
// updateRate 
// deleteRate 
import { selectPathSegment, rateScenary, rateSafety, rateInfrastructure, updateRate, deleteRate, renderTotals} from '../actions/actions.js'; 

const TotalPerSegment = prop => {
    // declare a constant dispatch
  const dispatch = useDispatch();
    // contain the result number after triger event
    // writeCurentSegmentNumber contain the result number after triger event
  const {
    segmentsRated,
    overallScenaryRate,
    overallSafetyRate,
    overallInfrastructureRate
  } = useSelector((state) => state.bpathReducer);  
  
    

    // function that dispatch an action
    const handleDispatch = (obj) => dispatch(renderTotals(obj));
    
    // fetch the data at the endpoint overall
    const newOverallSum = () => {
        return fetch("/api/sumary", {
          // check using something like this is it does not work  fetch('/api/leaders')
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "what": "need sumary data"
          }),
        })
          .then((res) => res.json())
      };
    

    const HandlerAndNewOverallSum = async () => {
        const resultObj = await newOverallSum();
        await handleDispatch(resultObj);
      };


    // Make a funtion that fetch the data and then invoke the handleDispatch

    return(
        <div className='totalNumbersComponent'>
            <div className='totalNums'>{segmentsRated} SEGMENTS</div>
            <div className='overallDataTable'>bike path segments rated !</div>
            <div className='totalNums'>{overallSafetyRate}/5</div>
            <div className='overallDataTable'>overall bike path SAFETY Rate in search area</div>
            <div className='totalNums'>{overallScenaryRate}/5</div>
            <div className='overallDataTable'>overall bike path SCENARY Rate in search area</div>
            <div className='totalNums'>{overallInfrastructureRate}/5</div>
            <div className='overallDataTable'>overall bike path INFRASTRUCTURE Rate in search area</div>
            <button className='overallButton' onClick={HandlerAndNewOverallSum}>summary of rates in search area</button>
        </div>
    )
}


export default TotalPerSegment;
