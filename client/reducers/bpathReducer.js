// have the store with the state
// the app and updates 
  // uses switch and case to select the action (e.g., types.ADD_MARKET) and reassign the state with the needed information
   
  import * as types from '../constants/actionsTypes';

  const intialState = {
    individualScenaryRate : 0.00,
    individualSafetyRate : 0.00,
    individualInfrastructureRate : 0.00,
    curentSegmentNumber : null,
    overallScenaryRate : 0.00,
    overallSafetyRate : 0.00,
    overallInfrastructureRate : 0.00,
  }

  const bpathReducer = (state = intialState, action) => {
    
    switch(action.type) {

      case types.SELECT_PATH_SEGMENT: {
        return {
          ...state,
        }
      }

      case types.RATE_SCENARY: {
        return {
          ...state,
        }
      }

      case types.RATE_SAFETY: {
        return {
          ...state,
        }

      }

      case types.RATE_INFRASTRUCTURE: {
        return {
          ...state,
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
