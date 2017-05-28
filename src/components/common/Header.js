
import React from 'react';
import {Link, IndexLink} from 'react-router';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/home" activeClassName="active" component={HomePage}>Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active" component={AboutPage}>About</Link>
    </nav>
  );
};

export default Header;
