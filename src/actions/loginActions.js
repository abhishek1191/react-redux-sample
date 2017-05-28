/**
 *
 */

import loginAPI from '../api/mockLoginApi';
import {browserHistory} from 'react-router';
import * as Cookies from 'js-cookie';

export function loginUser(credentials) {
    return function (dispatch) {
        return loginAPI.checkUserLogin(credentials).then(user => {
            dispatch(loginUserSuccess(user));
            Cookies.set('user', user, {expires:1});
            browserHistory.push('home');
        }).catch(error => {
            console.log(error.message);
            dispatch(loginUserFailure());
            Cookies.remove('user');
            throw(error);
        });
    };
}

export function loginUserSuccess(user){
    return {type: 'LOGIN_USER_SUCCESS', user};
}

export function loginUserFailure() {
    return {type: 'LOGIN_USER_FAILURE'};
}