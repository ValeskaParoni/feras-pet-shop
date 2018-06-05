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
        this.state= {service: this.props.registeredServices[i], selectedPet: -1, selectedDay: this.getTodayDate(),
          availableSlots: [true,true,true,true,true,true,true,true,true,true], selectedHour: 8};
      }
    }
  }

  componentDidMount(){
    this.showTimeSlots({target: {value: this.getTodayDate()}})
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

  handleChangeHour = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({"selectedHour": value});
  }



   //get services from the scheduled day
  //available services and unavalaible services
  showTimeSlots = (event) =>{

    const target = event.target;
    const value = target.value;

    this.setState({selectedDay: value});
    const baseHour = 8;

    console.log("selected:"+value);
    console.log(this.props.scheduledServices[0].serviceDate);
    this.props.scheduledServices.filter(service => service.serviceDate==value).map((service)=>{
           if(service.serviceTime >=baseHour && service.serviceTime < baseHour+10){
              let newSlots = this.state.availableSlots;
              newSlots[service.serviceTime-baseHour]=false;
              this.setState({availableSlots: newSlots});
              console.log(newSlots);
           }
    });

 
  }

  addToCart = () =>{

    let petId = this.state.selectedPet;

    let pet;
    for(let i=0; i<this.props.pets.length; i++){
      if(petId==-1){

        if(this.props.pets[i].ownerId == this.props.userId){
          pet = this.props.pets[i];
          break;
        }
      }else{
        if(petId == this.props.pets[i].id){
          pet = this.props.pets[i];
          break;
        }
        
      }
 
    }

     let newService = {
        "id": this.state.service.id,
        "petID": pet.id,
        "petName": pet.name,
        "serviceName": this.state.service.serviceName,
        "serviceDate": this.state.selectedDay,
        "serviceTime": this.state.selectedHour,
        "serviceID": this.state.service.serviceID,
        "servicePrice": this.state.service.servicePrice,
        "servicePicture": this.state.service.servicePicture
    }
    this.props.setService(newService)
    // this.props.scheduleService(newService);
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
                <option value={pet.id} key={pet.id}>{pet.name} (#{pet.id})</option>
              );
            })}
          </select>

          <br/>
          <b>Dia desejado:</b>
          <input type="date" min={this.getTodayDate()} onChange={this.showTimeSlots} value={this.state.selectedDay}/><br/>
          <div id="timeSlots">
          <b>Horários disponíveis para o dia:</b>
          <select onChange={this.handleChangeHour} value={this.state.selectedHour}>
           {this.state.availableSlots.map((slot, idx)=>{
            if(slot==true)
              return (
                <option value={idx+8} key={idx}>{idx+8}</option>
              );
            })}
           </select><br/>
          <NavLink to="/servicepayment"><Button text="Confirmar" onClick={this.addToCart}/></NavLink>
          </div>

        </section>
    );
  }
}


const mapStateToProps = state => {
  return { userId: state.usersReducer.userId, isAdmin: state.usersReducer.isAdmin,
    loggedin: state.usersReducer.loggedin, registeredServices: state.servicesReducer.registeredServices,
    selectedService: state.scheduledServicesReducer.selectedService,
    scheduledServices: state.scheduledServicesReducer.scheduledServices,
    pets: state.petsReducer.pets
  };
}


export default connect(
  mapStateToProps,
  actions
)(CalendarPage);
