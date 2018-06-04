import React from 'react';
import RegisterProductForm from '../../product-form/RegisterProductForm'
import { connect } from 'react-redux';
import * as actions from '../../actions'

//Register Product page
class RegisterProducts extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
    return(
      <section className="content">
        <RegisterProductForm/>
      </section>
    );
  }

}
const mapStateToProps = state => {
  return { registeredUsers: state.usersReducer.registeredUsers };
};

export default RegisterProducts;
