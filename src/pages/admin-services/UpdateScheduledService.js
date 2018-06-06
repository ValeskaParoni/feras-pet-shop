import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Button from '../../controls/Button';
import {withRouter} from 'react-router-dom';
import {
  NavLink
} from "react-router-dom";


/*
  Page for updating scheduled services
*/

class UpdateScheduledService extends React.Component{
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

    if(this.props.service!=undefined){
          this.state= {selectedPet: this.props.service.petName, selectedDay: this.props.service.serviceDate,
          availableSlots: newSlots, selectedHour: this.props.service.serviceTime};
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
        "id": this.props.service.id,
        "petID": this.props.service.petID,
        "petName": this.props.service.petName,
        "serviceName": this.props.service.serviceName,
        "serviceDate": this.state.selectedDay,
        "serviceTime": hour,
        "serviceOrderDate": this.props.service.serviceOrderDate,
        "serviceID": this.props.service.serviceID,
        "servicePrice": this.props.service.servicePrice,
        "servicePicture": this.props.service.servicePicture
    }
    this.props.updateSchedule(newService);
    alert("Serviço atualizado!");
    this.props.history.push("/adminServices");
  
  }
  
  render(){

    if(this.props.service==undefined){
      return(
        <section className="content">
          <b>Erro! Favor retornar à página anterior</b>
        </section>
      );
    }
    return(
       <section className="content">
          <h2>Selecione o pet e o horário para o serviço </h2>
          <b>Serviço: {this.props.service.serviceName}</b><br/>
          <b>Pet:</b> {this.props.service.petName+" ( id:" +this.props.service.petID+")"}

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
           </select><br/><br/>
            <div id="new_pet_buttons">
                      <NavLink to="/adminServices" id='home_link'><Button buttonClass="cancel_button" text="Cancelar"/></NavLink>
                      <Button text="Confirmar" onClick={this.addToCart}/>
            </div>
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
    pets: state.petsReducer.pets,
    service: state.cartReducer.service
  };
}


export default connect(
  mapStateToProps,
  actions
)(UpdateScheduledService);
