/**
 *
 */


export default function loginReducer(state=[], action) {
    switch (action.type){
        case 'LOGIN_USER_SUCCESS' :
            return action.user;

        case 'LOGIN_USER_FAILURE' :
            return null;

        default:
            return state;
    }

}
