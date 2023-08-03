/* SAMPLE OF AN ACTION 
// import actionType constants
import * as types from '../constants/actionTypes';
// newLocation to be added 
export const newLoactionActionCreator = location => ({
  type: types.SET_NEW_LOCATION,
  payload: location,
});

CREATE THE FOLOWING ACTIONS 
  // select scenic rate
  // select a safety rate
  // select a infrastructure rate

  // others tb determine
*/

import * as types from '../constants/actionsTypes';

// import acction from actionsTypes 
export const selectPathSegment = num6Dig => ({ // check the data number
  type: types.SELECT_PATH_SEGMENT,
  payload: num6Dig,
})

export const writePathSegment = num6Dig => ({ // check the data number
  type: types.WRITE_PATH_SEGMENT,
  payload: num6Dig,
})

// types.RATE_SCENARY
export const rateScenary = num => ({ // 1 to 5
  type: types.RATE_SCENARY,
  payload: num,
})

// types.RATE_SAFETY
export const rateSafety = num => ({ // 1 to 5
  type: types.RATE_SAFETY,
  payload: num,
})

// types.RATE_INFRASTRUCTURE
export const rateInfrastructure = num => ({ // 1 to 5
  type: types.RATE_INFRASTRUCTURE,
  payload: num,
})

// types.UPDATE_RATE
export const updateRate = num => ({ // 1 to 5
  type: types.UPDATE_RATE,
  payload: num,
})

// types.DELETE_RATE
export const deleteRate = num => ({ // 1 to 5
  type: types.DELETE_RATE,
  payload: num,
})

export const renderTotals = obj => ({ // 1 to 5
  type: types.RENDER_TOTALS,
  payload: obj,
})

