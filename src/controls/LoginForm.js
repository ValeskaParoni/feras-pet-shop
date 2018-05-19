 import React from 'react';
 import Button from './Button';
 import Input from './Input';

/*
props:
  this.props.onClick = function to be called when the button is clicked
  this.props.text = text inside the button
*/

/*
    Login:
        check if user and password are in database
        if so, 
            is admin?
                admin buttons
            else
                client buttons
*/

class LoginForm extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  
  render(){
    return (
        <form id="login">
             <div id="username_form"> 
                <label>Usuário:</label>
                <Input type="text" name="username" id="username_input"/>
                <br/>
            </div>
            <div id="password_form"> 
                <label>Senha: </label>
                <Input type="password" name="psw"/>
                <br/>
            </div>
          <Button buttonClass="login_button" text="Login" id="login_button"/>
        </form>
    );
  }
}

export default LoginForm;

