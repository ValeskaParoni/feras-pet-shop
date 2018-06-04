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
  The website header.
    Includes login bar.
    Navlinks change according to whether used is logged out, a client of an admin
*/

class Header extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  //Calls logoff function from store
  logoff = () => {
    this.emptyCart();
    this.props.logoff();
  }

  //empties cart when logging off
  emptyCart = () => {
    
    //replenishes product quantity to product catalog
    for(let i=0; i<this.props.cartReducer.cart.length; i++){
      for(let j=this.props.cartReducer.cart[i].count; j>0; j--){
          let product = {id: this.props.cartReducer.cart[i].id};
          this.props.increaseCatalogQuantity(product)
      }
    } 
    this.props.emptyCart();

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
                      <NavLink to="/editUser">Alterar cadastro</NavLink>
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
                      <NavLink to="/cart" id="link_change_user">Carrinho de compras</NavLink>
                      <NavLink to="/editUser">Alterar cadastro</NavLink>
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
    loggedin: state.usersReducer.loggedin,cartReducer: state.cartReducer};
};



export default connect(
  mapStateToProps,
  actions
)(Header);
