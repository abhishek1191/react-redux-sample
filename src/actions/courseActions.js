/**
 * Created by Abhishek on 7/31/2016.
 */
import courseAPI from '../api/mockCourseApi';

export function createCourse(course) {
  return {type : "CREATE_COURSE", course};
}

export function loadCoursesSuccess(courses) {
  return {type: "LOAD_COURSES_SUCCESS", courses};
}

export function loadCourses(){
  return function (dispatch) {
    return courseAPI.getAllCourses().then(courses => {
        dispatch(loadCoursesSuccess(courses));
      }).catch(error => {
        console.log(error.message);
      throw(error);
    });
  };
}
