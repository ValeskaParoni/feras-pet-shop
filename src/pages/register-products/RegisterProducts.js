import React from 'react';
import RegisterProductForm from '../../product-form/RegisterProductForm'
import { connect } from 'react-redux';
import * as actions from '../../actions'
class RegisterProducts extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
    return(<RegisterProductForm/>);
  }

}
const mapStateToProps = state => {
  return { registeredUsers: state.usersReducer.registeredUsers };
};

export default RegisterProducts;
