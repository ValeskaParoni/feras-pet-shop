import React from 'react';
import RegisterProductForm from '../../product-form/RegisterProductForm'
import Product from './Product'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import {withRouter} from 'react-router-dom';
import Button from '../../controls/Button';
import {
  NavLink
} from "react-router-dom";
//import styles from '../styles.css';
class Products extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
    let but;
    if (this.props.isAdmin == true) {
      but = <NavLink to="/registerProducts" id='register_product_link'><Button buttonClass="register_product_button" text="Adicionar produto"/></NavLink>
    }
    return (
          <section className="content">
          <h2>Produtos</h2>
          {but}
          <br/>
          {this.props.registeredProducts.map((product)=>{
              return (<Product id={product.id}/>);
          })}
          <div className="clearfix"></div>
          </section>
    );

  }

}
const mapStateToProps = state => {
  return { userId: state.usersReducer.userId, isAdmin: state.usersReducer.isAdmin,
    loggedin: state.usersReducer.loggedin, registeredProducts: state.productsReducer.registeredProducts };
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(Products));
