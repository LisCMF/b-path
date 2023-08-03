import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import all potential actions
import {
  selectPathSegment,
  writePathSegment,
  rateScenary,
  rateSafety,
  rateInfrastructure,
  updateRate,
  deleteRate,
} from "../actions/actions.js";

const SelectSegment = (prop) => {
  // declare a constant dispatch
  const dispatch = useDispatch();
  // writeCurentSegmentNumber contain the result number after triger event
  const {
    individualScenaryRate,
    individualSafetyRate,
    individualInfrastructureRate,
    curentSegmentNumber,
    writeCurentSegmentNumber,
  } = useSelector((state) => state.bpathReducer);

  // for the segment selector
  const handleChangeWrite = (e) => dispatch(writePathSegment(e.target.value));
  const handleChangeSelect = (e) => { 
    dispatch(selectPathSegment(e.target.value));
    fetch("http://localhost:8080/addRate", {
      // check using something like this is it does not work  fetch('/api/leaders')
      method: "POST",
      body: JSON.stringify({
        segment: curentSegmentNumber,
        scenaryRate: individualScenaryRate,
        safetyRate: individualSafetyRate,
        infrastructureRate: individualInfrastructureRate,
        users: "Place holder",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="selectSegmentDiv">
      <label className="rateLabel">BIKE PATH SEGMENT</label>
      <input
        id="selectSegment"
        type="text"
        name="Bike Path Segment Number"
        onChange={handleChangeWrite}
        value={writeCurentSegmentNumber}
      ></input>
      <button id="workOnSegmentButton" onClick={handleChangeSelect}>
        select
      </button>
    </div>
  );
};

export default SelectSegment;
