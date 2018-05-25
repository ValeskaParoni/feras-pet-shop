import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Button from '../../controls/Button';
import Pet from '../../pets/Pet';
import InvalidAccessMessage from '../../controls/InvalidAccessMessage';


/* No props
  TODO: add onclick function to button!
*/

class MyPets extends React.Component{
  constructor (props, context){
    super(props, context);
  }


  render(){
    if(this.props.loggedin && !this.props.isAdmin){
      //user is logged in and is an admin
      //display form
      return (
        <section className="content">
        {this.props.pets.map((pet, idx)=>{
          if(pet.ownerId==this.props.userId)
            return (<Pet id={pet.id}/>);
        })}
        <div className="clearfix"></div>
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

const mapStateToProps = (state) => {
  return {
    userId: state.usersReducer.userId,
    loggedin: state.usersReducer.loggedin,
    pets: state.petsReducer.pets,
    isAdmin: state.usersReducer.isAdmin
  }
}

// export default HomePage;
export default connect(
  mapStateToProps,
  actions
)(MyPets);