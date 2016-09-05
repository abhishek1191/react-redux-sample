/**
 * Created by Abhishek on 8/22/2016.
 */

import React from 'react';
class CourseList extends React.Component {
  constructor(state, props) {
    super(state, props)
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Length</th>
            <th>Watch</th>
          </tr>
          </thead>
          <tbody>
          {this.props.courses.map((course,index)=>{
            return (
              <tr key={index}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.length}</td>
                <td><a href={course.watchHref}>Watch</a></td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    )
  }
}
export default CourseList;
