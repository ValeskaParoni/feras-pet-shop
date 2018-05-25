import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Button from '../../controls/Button';
import EditPetClient from '../../pet-client-form/EditPetClient';
import InvalidAccessMessage from '../../controls/InvalidAccessMessage';



/* 
  Gets props from redux:
    loggedin: true if user is logged in, false otherwise
    isAdmin: true if user is admin
    userId: number of user ID
*/

class EditUser extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
   
    if(this.props.loggedin){
      //user is logged in and is an admin
      //display form
      return (
        <section className="content">
          <EditPetClient formType="client"/>
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
)(EditUser);