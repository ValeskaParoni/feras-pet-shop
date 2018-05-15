import React from 'react';
import Image from './Image';
import Link from './Link';
import styles from '../styles.css';
/*
props:
  this.props.onClick = function to be called when the button is clicked
  this.props.text = text inside the button
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
          <Link id='home_link' href='index.html' text='Home' />
          <Link href='produtos.html' text='Produtos' />
          <Link href='servicos.html' text='Serviços' />
          <Link href='meuspets.html' text='Meus Pets' />
        </nav>
      </header>
    );
  }
}

export default Header;
