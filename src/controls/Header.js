import React from 'react';
import Image from './Image';
import Link from './Link';
import LoginForm from './LoginForm';
import styles from '../styles.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import { connect } from 'react-redux';

import * as actions from '../actions'

/*
Update nav bar as needed!
*/

class Header extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  //Calls logoff function from store
  logoff = () => {
    this.props.logoff();
  }


  render(){
    /*Renders header with links if user is logged in
        -links differ from admin to regular user
      Renders login form is user isnt loggedin
    */
    if(this.props.loggedin){
      if(this.props.isAdmin){
            return (
              <header>
                <Image src='./images/alternatelogo.png' alt='Feras Pet Shop' id='logo_img'/>
                <nav>
                    <NavLink to="/" id='home_link'>Home</NavLink>
                    <NavLink to='/products'>Produtos</NavLink>
                    <NavLink to='/services'>Serviços</NavLink>
                    <NavLink to='/registerUser'>Cadastrar Usuário</NavLink>

                    <div id="logged_user_options">
                      <span id="username">Usuário:<br/> {this.props.userName}</span>
                      <NavLink to="/reports" id="link_adm_users">Relatórios gerenciais</NavLink>
                      <NavLink to="/updateUserProfile">Alterar cadastro</NavLink>
                      <NavLink to="/" onClick={this.logoff}>Sair</NavLink>
                    </div>
              </nav>
              </header>
            );
      }else{
            return (
              <header>
                <Image src='./images/alternatelogo.png' alt='Feras Pet Shop' id='logo_img'/>
                <nav>
                    <NavLink to="/" id='home_link'>Home</NavLink>
                    <NavLink to='/products'>Produtos</NavLink>
                    <NavLink to='/services'>Serviços</NavLink>
                    <NavLink to='/mypets'>Meus Pets</NavLink>
                    <div id="logged_user_options">
                      <span id="username">Usuário:<br/>{this.props.userName}</span>
                      <NavLink to="/shoppingCart" id="link_change_user">Carrinho de compras</NavLink>
                      <NavLink to="/updateUserProfile">Alterar cadastro</NavLink>
                      <NavLink to="/" onClick={this.logoff}>Sair</NavLink>
                    </div>
                </nav>
              </header>
            );
      }
    }else{
            return (
              <header>
                <Image src='./images/alternatelogo.png' alt='Feras Pet Shop' id='logo_img'/>
                <nav>
                    <NavLink to="/" id='home_link'>Home</NavLink>
                    <LoginForm/>
                </nav>
              </header>
            );
    }
  }
}
const mapStateToProps = state => {
  return { userName: state.usersReducer.userName, userId: state.usersReducer.userId, isAdmin: state.usersReducer.isAdmin,
    loggedin: state.usersReducer.loggedin };
};



export default connect(
  mapStateToProps,
  actions
)(Header);
