import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Button from '../../controls/Button';
import {withRouter} from 'react-router-dom';
import {
  NavLink
} from "react-router-dom";


/*
  Page for scheduling services
*/

class CalendarPage extends React.Component{
  constructor (props, context){
    super(props, context);


    //checks schedule for today
    let newSlots = [true,true,true,true,true,true,true,true,true,true];
    let baseHour = 8;

    this.props.scheduledServices.filter(service => service.serviceDate==this.getTodayDate()).map((service)=>{
           if(service.serviceTime >=baseHour && service.serviceTime < baseHour+10){
              newSlots[service.serviceTime-baseHour]=false;
           }
    });

    //initiates state with selected service
    for(let i=0; i<this.props.registeredServices.length; i++){
      if(this.props.selectedService === this.props.registeredServices[i].id){
        this.state= {service: this.props.registeredServices[i], selectedPet: -1, selectedDay: this.getTodayDate(),
          availableSlots: newSlots, selectedHour: -1};
      }
    }
  }

  componentDidMount(){
    // this.showTimeSlots({target: {value: this.getTodayDate()}})
  }

  //Gets date for today in yyyy-mm-dd format
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

  //handle change for selected pet
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({"selectedPet": value});
  }

  //handle change for hour
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

    //check scheduled services for today, 10 slots
    let newSlots = [true,true,true,true,true,true,true,true,true,true];
    this.props.scheduledServices.filter(service => service.serviceDate==value).map((service)=>{
           if(service.serviceTime >=baseHour && service.serviceTime < baseHour+10){
              newSlots[service.serviceTime-baseHour]=false;
           }
    });
     this.setState({availableSlots: newSlots});
 
  }

  //saves scheduled service
  addToCart = () =>{

    let petId = this.state.selectedPet;

    //if pet was left unchanged, petId is -1

    //get pet from list
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

    //if hour was unchanged, hour is first available slot (which is the first option shown)
    let hour = this.state.selectedHour;
    if(hour==-1){
      for(let i=0; i<this.state.availableSlots.length; i++){
        if(this.state.availableSlots[i]==true){
          hour=i+8;
          break;
        }
      }
    }
 
    //saves service
     let newService = {
        "id": this.state.service.id,
        "petID": pet.id,
        "petName": pet.name,
        "serviceName": this.state.service.serviceName,
        "serviceDate": this.state.selectedDay,
        "serviceTime": hour,
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
