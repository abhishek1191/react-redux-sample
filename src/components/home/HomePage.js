/**
 * Created by Abhishek on 7/31/2016.
 */

import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';

class HomePage extends React.Component{
  render(){
    return (
        <div>
            <Header/>
            <div className="jumbotron">
                <h1>Sample App Home</h1>
                <p>Basic implementation of react, redux and react-router. Navigate by using top navigation links or below "About" button.</p>
                <Link to="about" className="btn btn-primary">About</Link>
            </div>
        </div>
      );
  }
}

export default HomePage;
