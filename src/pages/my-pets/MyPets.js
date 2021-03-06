import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Button from '../../controls/Button';
import Pet from '../../pets/Pet';
import InvalidAccessMessage from '../../controls/InvalidAccessMessage';
import {
  NavLink
} from "react-router-dom";


/*Main page for pets.
  Not accessible by unlogged users or admins. 
  No props
  TODO: add onclick function to button!
*/

class MyPets extends React.Component{
  constructor (props, context){
    super(props, context);
  }


  render(){
    if(this.props.loggedin && !this.props.isAdmin){
      //user is logged in and isnt an admin
      //display pets
      return (
        <section className="content">
        <h2>Meus pets</h2>
        <NavLink to="/registerPet" id='home_link'><button id="register_pet_button">Cadastrar novo pet</button></NavLink>
        <div className="clearfix"></div>
        {this.props.pets.map((pet, idx)=>{
          if(pet.ownerId==this.props.userId)
            return (<Pet id={pet.id} key={pet.id}/>);
        })}
        <div className="clearfix"></div>
        </section>
      );
    }

    //if not logged in or admin
    //display error
    return (
      <section className="content">
        <InvalidAccessMessage/>
      </section>
    );
   


  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.usersReducer.userId,
    loggedin: state.usersReducer.loggedin,
    pets: state.petsReducer.pets,
    isAdmin: state.usersReducer.isAdmin
  }
}

export default connect(
  mapStateToProps,
  actions
)(MyPets);