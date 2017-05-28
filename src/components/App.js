
import React from 'react';

class App extends React.Component{

  render(){
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}

export default App;

App.PropTypes = {
    children : React.PropTypes.children
}