/**
 * Created by Abhishek on 7/31/2016.
 */

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
class CoursesPage extends React.Component{
  constructor(state,props){
    super(state, props);

    this.state = {
      course: {title : null}
    };
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }
  // onTitleChange(event){
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course});
  // }
  // onClickSave(){
  //   //alert(`New Course ${this.state.course.title}`);
  //   this.props.actions.createCourse(this.state.course);
  // }
  courseRow(course,index){
    return(
      <div key={index}>{course.title}</div>
    );
  }
  render(){
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={this.props.courses}/>
      </div>
    );
  }
}
export default connect(function mapStateToProps(state, ownProps) {
  return {
    courses : state.courses
  };
}, function mapDispatchToProps(dispatch){
  return{

    actions: bindActionCreators(courseActions, dispatch)
  };
})(CoursesPage);
// createCourse : course => dispatch(courseActions.createCourse(course))
//
// <h2>Add Course</h2>
// <input type="text"
// value={this.state.course.title  || ""}
// onChange={this.onTitleChange}>
// </input>
// <input type="submit"
// value="Save"
// onClick={this.onClickSave}>
//
// </input>
