import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Button from '../../controls/Button';
import RegisterPetClient from '../../pet-client-form/RegisterPetClient'
import InvalidAccessMessage from '../../controls/InvalidAccessMessage'



/* 
  Gets props from redux:
    loggedin: true if user is logged in, false otherwise
    isAdmin: true if user is admin
    userId: number of user ID
*/

class RegisterUser extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
   
    if(this.props.loggedin && this.props.isAdmin){
      //user is logged in and is an admin
      //display form
      return (
        <section className="content">
          <RegisterPetClient formType="client"/>
        </section>
      );
    }

    //if not logged in or not admin
    //display error
    return (
      <section className="content">
        <InvalidAccessMessage/>
      </section>
    );
   
  
  }
}

const mapStateToProps = state => {
  return { userId: state.usersReducer.userId, isAdmin: state.usersReducer.isAdmin, 
    loggedin: state.usersReducer.loggedin };
};


export default connect(
  mapStateToProps,
  actions
)(RegisterUser);