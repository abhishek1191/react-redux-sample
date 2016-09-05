/**
 * Created by Abhishek on 7/31/2016.
 */

export default function courseReducer(state=[], action) {
  switch (action.type){
    case 'CREATE_COURSE' :
      return [...state,Object.assign({},action.course)];

    case 'LOAD_COURSES_SUCCESS' :
      return action.courses;


    default:
      return state;
  }

}
