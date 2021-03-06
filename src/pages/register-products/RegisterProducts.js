import React from 'react';
import RegisterProductForm from '../../product-form/RegisterProductForm'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import InvalidAccessMessage from '../../controls/InvalidAccessMessage';

//Register Product page
class RegisterProducts extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
    if(this.props.loggedin && this.props.isAdmin){
      return(
        <section className="content">
          <RegisterProductForm/>
        </section>
      );
    }

    return (
          <section className="content">
            <InvalidAccessMessage/>
          </section>
    );
  
  
  }

}
const mapStateToProps = state => {
  return { loggedin: state.usersReducer.loggedin,
          isAdmin: state.usersReducer.isAdmin };
};

export default connect(
  mapStateToProps,
  actions
)(RegisterProducts);