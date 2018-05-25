import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Button from '../controls/Button';

/*
props:
  this.props.id: id of the pet to be shown

  TODO: add next service
*/

class Pet extends React.Component{
  constructor (props, context){
    super(props, context);

    for(let i=0; i<this.props.pets.length; i++){
      if(this.props.id == this.props.pets[i].id)
        this.state= {myPet: this.props.pets[i]};
    }

  }

  getAge = (dateString) =>{

    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if(m<0){
      m = 12 - m;
    }

    let ageString = age + " ano(s) "+ m+ " mes(es)";
    return ageString;
  }
  
  render(){
    return (
      <div className="pet_profile">
        <img src={this.state.myPet.picture} alt={this.state.myPet.name}/>
        <div className="pet_info">
          <b>Nome:</b> {this.state.myPet.name}<br/>
          <b>Id:</b> {this.state.myPet.id}<br/>
          <b>Idade:</b> {this.getAge(this.state.myPet.birthdate)}<br/>
          <b>Raça:</b> {this.state.myPet.breed} <br/>
          <b>Próximo serviço agendado:</b> 
          <br/>
          <div className="profile_buttons">
            <Button buttonClass="button_with_margin" text="Editar cadastro"/>
            <Button text="Serviços Agendados"/>
          </div>
        </div>
      
        <div className="clearfix"></div>
      </div>
    );
  }

}


const mapStateToProps = state => {
  return { pets: state.petsReducer.pets };
}


export default connect(
  mapStateToProps,
  actions
)(Pet);