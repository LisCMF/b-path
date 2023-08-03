// have the store with the state
// the app and updates 
  // uses switch and case to select the action (e.g., types.ADD_MARKET) and reassign the state with the needed information
   
  import * as types from '../constants/actionsTypes';

  const intialState = {
    individualScenaryRate : 0.00,
    individualSafetyRate : 0.00,
    individualInfrastructureRate : 0.00,
    writeCurentSegmentNumber: "",
    curentSegmentNumber : "",
    segmentsRated: "TBD",
    overallScenaryRate : "TBD",
    overallSafetyRate : "TBD",
    overallInfrastructureRate : "TBD",
  }

  const bpathReducer = (state = intialState, action) => {
    let segment;
    switch(action.type) {
      
      case types.SELECT_PATH_SEGMENT: {
        segment =  state.writeCurentSegmentNumber
        return {
          ...state,
          curentSegmentNumber : segment,
          writeCurentSegmentNumber: "",
        }
      }

      case types.WRITE_PATH_SEGMENT: {
        return {
          ...state,
          writeCurentSegmentNumber : action.payload,
        }
      }
      
      case types.RATE_SCENARY: {
        return {
          ...state,
          individualScenaryRate : action.payload,
        }
      }

      case types.RATE_SAFETY: {
        return {
          ...state,
          individualSafetyRate : action.payload,
        }

      }

      case types.RATE_INFRASTRUCTURE: {
        return {
          ...state,
          individualInfrastructureRate : action.payload,
        }
      
      }

      case types.UPDATE_RATE: {
        return {
          ...state,
        }      
      }

      case types.DELETE_RATE: {
        return {
          ...state,
       
        }
      }
      case types.RENDER_TOTALS: {
        return {
          ...state,
          segmentsRated: action.payload.segmentsRated,
          overallScenaryRate : action.payload.overallScenaryRate,
          overallSafetyRate : action.payload.overallSafetyRate,
          overallInfrastructureRate : action.payload.overallInfrastructureRate,
        }
      }

      
    }

    return state;
  
  }
  // actions for switch
  //  SELECT_PATH_SEGMENT
  //  RATE_SCENARY
  //  RATE_SAFETY
  //  RATE_INFRASTRUCTURE
  //  UPDATE_RATE
  //  DELETE_RATE
  
  export default bpathReducer;
