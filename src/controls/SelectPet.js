import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as calendarActions from '../actions/calendarActions';

/*
 * props:
 * * pets: array com {petName:'Nome', petNumber:'3'}
 * */

class SelectPet extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  
  sendDataToStore = () => {
    let select = document.getElementById('pet-select');
    this.props.actions.setPet(select.value);
  }
  
  render(){
    let options = [];
    for (let pet of this.props.pets){
      options.push(<option key={pet.id} pet_id={pet.id} value={pet.id}>{pet.name} (#{pet.id})</option>);
    }
    return (
      <select id='pet-select' onChange={this.sendDataToStore}>
		  {options}
		</select>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    pets: state.petsReducer.pets,
  };
}
              
function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(calendarActions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectPet);
