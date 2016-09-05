/**
 * Created by Abhishek on 7/31/2016.
 */

import React from 'react';
import {Link, IndexLink} from 'react-router';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import CoursesPage from '../courses/CoursesPage';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active" component={HomePage}>Home</IndexLink>
      {" | "}
      <Link to="courses" activeClassName="active" component={CoursesPage}>Courses</Link>
      {" | "}
      <Link to="about" activeClassName="active" component={AboutPage}>About</Link>
    </nav>
  );
};

export default Header;
