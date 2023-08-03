import React from "react";
import { useEffect, useState } from "react";
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
  const handleChangeSelect = (e) => dispatch(selectPathSegment(e.target.value));

  // add a rate
  //    const [addRate, setCustomers] = useState([]);
   
  const sendNewRate = () => {
    return fetch("/api/addRate", {
      // check using something like this is it does not work  fetch('/api/leaders')
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "segment": writeCurentSegmentNumber, // happens before than curentSegmentNumber
        "scenaryRate": individualScenaryRate,
        "safetyRate": individualSafetyRate,
        "infrastructureRate": individualInfrastructureRate,
        users: 'Place holder'
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const updateRate = () => {
    return fetch("/api/updateRate", {
      // check using something like this is it does not work  fetch('/api/leaders')
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "segment": writeCurentSegmentNumber, // happens before than curentSegmentNumber
        "scenaryRate": individualScenaryRate,
        "safetyRate": individualSafetyRate,
        "infrastructureRate": individualInfrastructureRate,
        users: 'Place holder'
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  const deleteRate = () => {
    return fetch("/api/deleteRate", {
      // check using something like this is it does not work  fetch('/api/leaders')
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "segment": writeCurentSegmentNumber, // happens before than curentSegmentNumber
        "scenaryRate": individualScenaryRate,
        "safetyRate": individualSafetyRate,
        "infrastructureRate": individualInfrastructureRate,
        users: 'Place holder'
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }


  const HandlerAndSend = async (e) => {
    await handleChangeSelect(e);
    await sendNewRate();
  };

  const HandlerAndUpdateRate = async (e) => {
    await handleChangeSelect(e);
    await updateRate();
  };

  const HandlerAndDeleteRate= async (e) => {
    await handleChangeSelect(e);
    await deleteRate();
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
      <button id="workOnSegmentButton" onClick={HandlerAndSend}>
        select
      </button>
      <button id="workOnSegmentButton" onClick={HandlerAndUpdateRate}>
        update
      </button>
      <button id="workOnSegmentButton" onClick={HandlerAndDeleteRate}>
        delete
      </button>
    </div>
  );
};

export default SelectSegment;
