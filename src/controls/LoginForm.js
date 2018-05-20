 import React from 'react';
 import Button from './Button';
 import { connect } from 'react-redux';

import * as actions from '../actions'

import registeredUsers from '../../resources/registeredUsers.json'

/*
uses from registeredUsers:
    loggedin
    name
    id
    isAdmin
*/

class LoginForm extends React.Component{
  constructor (props, context){
    super(props, context);
    this.state = {username: '', password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateLogin(){
    //check if username plus password is in "database"
    for (let i = 0; i < registeredUsers.users.length; i++) {
        if(registeredUsers.users[i].email === this.state.username && registeredUsers.users[i].password === this.state.password){
            let activeUser = {
              "loggedin": true,
              "userId": registeredUsers.users[i].id,
              "isAdmin": registeredUsers.users[i].isAdmin,
              "userName": registeredUsers.users[i].name

            }
            this.props.setActiveUser(activeUser);
            return;
        }
    } 

    alert("Email e senha incorretos!");

  }

  
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;


    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.validateLogin();   
  }

  
  render(){
    return (
        <form id="login">
             <div id="username_form"> 
                <label>Email:</label>
                 <input type="email" name="username" value={this.state.username} onChange={this.handleChange} />
                <br/>
            </div>
            <div id="password_form"> 
                <label>Senha: </label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <br/>
            </div>
          <Button buttonClass="login_button" text="Login" id="login_button" onClick={this.handleSubmit}/>
        </form>
    );
  }
}



export default connect(
  null,
  actions
)(LoginForm);