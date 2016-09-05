/**
 * Created by Abhishek on 7/31/2016.
 */

import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
    return (
      <div className="jumbotron">
        <h1>Pluralsight Tutorial App Home</h1>
        <p>Learning about react redux testing and webpack!</p>
        <Link to="about" className="btn btn-primary">About</Link>
      </div>
      );
  }
}

export default HomePage;
