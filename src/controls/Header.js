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
/*
Update nav bar as needed!

Header:
state:
if logged in, more links
  GET USERNAME

  if(admin )

  else
else
only home link plus log in
*/

class Header extends React.Component{
  constructor (props, context){
    super(props, context);
    this.state = {loggedIn: false, isAdmin: true};
  }

  render(){

    if(this.state.loggedIn){
      if(this.state.isAdmin){
            return (
              <header>
                <Image src='./images/alternatelogo.png' alt='Feras Pet Shop' id='logo_img'/>
                <nav>
                    <NavLink to="/" id='home_link'>Home</NavLink>
                    <NavLink to='/products'>Produtos</NavLink>
                    <NavLink to='/services'>Serviços</NavLink>
               
                    <div id="logged_user_options">
                      <span id="username">Usuário:<br/> admin123</span>
                      <NavLink to="/reports" id="link_adm_users">Relatórios gerenciais</NavLink>
                      <NavLink to="/updateUserProfile">Alterar cadastro</NavLink>
                      <a href="index_adm.html">Sair</a>
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
                      <span id="username">Usuário:<br/> admin123</span>
                      <NavLink to="/shoppingCart">Carrinho de compras</NavLink>
                      <NavLink to="/updateUserProfile">Alterar cadastro</NavLink>
                      <a href="index_adm.html">Sair</a>
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

export default Header;
