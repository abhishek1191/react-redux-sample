/**
 * Created by Abhishek on 7/31/2016.
 */

import {combineReducers} from 'redux';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  courses : courseReducer
});

export default rootReducer;
