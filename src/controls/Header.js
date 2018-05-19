import React from 'react';
import Image from './Image';
import Link from './Link';
import styles from '../styles.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
/*
Update nav bar as needed!
*/

class Header extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
    return (
      <header>
        <Image src='./images/alternatelogo.png' alt='Feras Pet Shop' id='logo_img'/>
        <nav>
            <NavLink to="/" id='home_link'>Home</NavLink>
            <NavLink to='/products'>Produtos</NavLink>
            <NavLink to='/services'>Serviços</NavLink>
            <NavLink to='/mypets'>Meus Pets</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
