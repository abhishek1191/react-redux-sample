

import React from 'react';
import Header from '../common/Header';
import {Link} from 'react-router';


class AboutPage extends React.Component{
  render(){
    return (
        <div>
            <Header/>
            <div className="jumbotron">
                <h1>About</h1>
                <p>This is the place where we may mention the details about the application</p>
                <ul className="list-style">
                    <li className="padding-normal"><Link to="/about/profile" className="btn btn-primary">Profile</Link></li>
                    <li className="padding-normal"><Link to="/about/team" className="btn btn-primary">Team</Link></li>
                    <li className="padding-normal"><Link to="/about/contactUs" className="btn btn-primary">Contact</Link></li>
                </ul>
                <br/>
                {this.props.children}
            </div>
        </div>
    );
  }
}

AboutPage.PropTypes = {
    children : React.PropTypes.any
}

export default AboutPage;