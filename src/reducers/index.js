/**
 * Created by Abhishek on 7/31/2016.
 */

import {combineReducers} from 'redux';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    user: loginReducer
});

export default rootReducer;
