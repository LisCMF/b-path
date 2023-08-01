/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import bpathReducer from './bpathReducer.js'; // import reducers here (only one in this project)


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  // sample markets: marketsReducer,
  bpathReducer: bpathReducer,
});

// make the combined reducers available for import
export default reducers;

// 

