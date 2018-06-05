import React from 'react';

/*
 * props:
 * * pets: array com {petName:'Nome', petNumber:'3'}
 * */

class SelectPet extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  
  render(){
    let options = [];
    for (let pet of this.props.pets){
      options.push(<option key={pet.petNumber} value={pet.petName}>{pet.petName} (#{pet.petNumber})</option>);
    }
    return (
      <select>
		  {options}
		</select>
    );
  }
}

export default SelectPet;
