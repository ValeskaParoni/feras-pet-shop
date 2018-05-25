import React from 'react';
import RegisterProductForm from '../../product-form/RegisterProductForm'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import {withRouter} from 'react-router-dom';
import {
  NavLink
} from "react-router-dom";
//import styles from '../styles.css';
class Products extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
  return();

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
