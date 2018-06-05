import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Button from '../../controls/Button';
import {withRouter} from 'react-router-dom';
import {
  NavLink
} from "react-router-dom";


/*

*/

class CalendarPage extends React.Component{
  constructor (props, context){
    super(props, context);


    for(let i=0; i<this.props.registeredServices.length; i++){
      if(this.props.selectedService === this.props.registeredServices[i].id){
        this.state= {service: this.props.registeredServices[i], selectedPet: -1, selectedDay: this.getTodayDate()};
      }
    }


  }

  getTodayDate = () =>{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
     if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

    today = yyyy+'-'+mm+'-'+dd;
    
    return today;
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({"selectedPet": value});
  }




  showTimeSlots = () =>{
    console.log(this.state.selectedDay);
    //this.props.scheduledServices.filter(service => service.petID==this.state.myPet.id).map((service)=>{

    //get services from the scheduled day
    //available services and unavalaible services
    //available time can be clicked
    //throws alert to confirm
    //adds to scheduledServices and to cart
    document.getElementById("timeSlots").innerHTML = {};
  }
  
  render(){

    if(this.state==null){
      return(
        <section className="content">
          <b>Erro! Favor retornar à página anterior</b>
        </section>
      );
    }
    return(
       <section className="content">
          <h2>Selecione o pet e o horário para o serviço </h2>
          <b>Serviço selecionado: {this.state.service.serviceName}</b><br/>
          <b>Selecione seu pet:</b>
          <select onChange={this.handleChange} value={this.state.selectedPet}>
            {this.props.pets.map((pet, idx)=>{
            if(pet.ownerId==this.props.userId)
              return (
                <option value={pet.name} key={pet.id}>{pet.name} (#{pet.id})</option>
              );
            })}
          </select>

          <br/>
          <b>Dia desejado:</b>
          <input type="date" min={this.getTodayDate()} onChange={this.showTimeSlots} value={this.state.selectedDay}/><br/>
          <div id="timeSlots">
          </div>

        </section>
    );
  }
}


const mapStateToProps = state => {
  return { userId: state.usersReducer.userId, isAdmin: state.usersReducer.isAdmin,
    loggedin: state.usersReducer.loggedin, registeredServices: state.servicesReducer.registeredServices,
    selectedService: state.scheduledServicesReducer.selectedService,
    pets: state.petsReducer.pets
  };
}


export default connect(
  mapStateToProps,
  actions
)(CalendarPage);
