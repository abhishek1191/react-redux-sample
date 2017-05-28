/**
 *
 */


import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LoginActions from '../../actions/loginActions';
import * as Cookies from 'js-cookie';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            isValidUsername: false

        };
    }

    componentWillMount(){
        Cookies.remove('user');
    }

    changeInput(type, event){
        let {value} = event.target;
        if(type == "username"){
            this.setState({username:value});
            this.validateUsername && value !== '' && this.validateUsername(value);
            return;
        }
        if(type == "password"){
            this.setState({password:value});
        }
    }

    validateUsername(username){
      if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username))){
          this.setState({isValidUsername: true});
      }
      else {
          this.setState({isValidUsername: false});
        }
    }

    handleLogin(){
        let creds = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.actions.loginUser(creds);
    }

    render(){
        return (
            <div className="jumbotron text-center">
                <h1>Welcome!</h1>
                <label className="padding-normal">Username</label>
                <input type="text" value={this.state.username} onChange={this.changeInput.bind(this,'username')}/>
                <br/>
                <label className="padding-normal">Password</label>
                <input type="password" value={this.state.password} onChange={this.changeInput.bind(this,'password')}/>
                <br/>
                <button disabled={!this.state.isValidUsername} className="btn btn-primary"
                        onClick={this.handleLogin.bind(this)} type="submit"> Submit </button>
            </div>
        );
    }
}

Login.PropTypes = {
    actions: React.PropTypes.Object
};

export default connect(null, function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(LoginActions, dispatch)
    };
})(Login);
//Remove extra code
//add styling
//git repo
//unit tests
//Error messaging
