 import React from 'react';
 import Button from './Button';
 import { connect } from 'react-redux';

import * as actions from '../actions'

/*
Login form: deals with user log-in
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

    if(this.state.username.length<=1 || this.state.password.length<=1){

      alert("Por favor, preencha todos os campos")

    }else{

      for (let i = 0; i < this.props.registeredUsers.length; i++) {
        if(this.props.registeredUsers[i].email === this.state.username && this.props.registeredUsers[i].password === this.state.password){
            let activeUser = {
              "loggedin": true,
              "userId": this.props.registeredUsers[i].id,
              "isAdmin": this.props.registeredUsers[i].isAdmin,
              "userName": this.props.registeredUsers[i].name

            }
            this.props.setActiveUser(activeUser);
            return;
        }
   
      }

      alert("Email e senha incorretos!"); 

    }


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
                 <input type="email" id ="login_email" name="username" value={this.state.username} onChange={this.handleChange} />
                <br/>
            </div>
            <div id="password_form"> 
                <label>Senha: </label>
                <input type="password" id="login_password" name="password" value={this.state.password} onChange={this.handleChange} />
                <br/>
            </div>
          <Button buttonClass="login_button" text="Login" id="login_button" onClick={this.handleSubmit}/>
        </form>
    );
  }
}

const mapStateToProps = state => {
  return { registeredUsers: state.usersReducer.registeredUsers };
};

export default connect(
  mapStateToProps,
  actions
)(LoginForm);