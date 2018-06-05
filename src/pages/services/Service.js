import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Button from '../../controls/Button';
import {withRouter} from 'react-router-dom';
import {
  NavLink
} from "react-router-dom";


//UPDATE BUTTON FUNCTION WHEN CALENDAR IS READY

//Displays a single service on a page
class Service extends React.Component{
  constructor (props, context){
    super(props, context);

    for(let i=0; i<this.props.registeredServices.length; i++){
      if(this.props.id === this.props.registeredServices[i].id){
        this.state= {service: this.props.registeredServices[i], serviceEditOn: false, serviceCopy: this.props.registeredServices[i], deleted: false};
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  //turns on service editing
  editService = () =>{

    this.setState({serviceEditOn: true});

  }

  goToCalendar = () =>{
      if(!this.props.loggedin){
        alert("Faça o login para agendar!");
      }else{
        this.props.selectService(this.props.id);
        this.props.history.push("/calendar");
      }
     
  }


  //cancels service editing and returns data to previous state
  cancelEdit = () =>{

    console.log("cancelded");

    let serviceCopy = {...this.state.serviceCopy}

    serviceCopy.serviceName = this.state.service.serviceName;
    serviceCopy.serviceDescription = this.state.service.serviceDescription;
    serviceCopy.servicePrice = this.state.service.servicePrice;
    serviceCopy.servicePicture = this.state.service.servicePicture;

    this.setState(
                  {
                    serviceEditOn: false,
                    serviceCopy
                  }
    );
  }

  //updates form when there's any change
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let serviceCopy = {...this.state.serviceCopy}
    serviceCopy[name] = value;
    this.setState({serviceCopy});

  }

  //Validates form and adds service to "database"
  handleSubmitService = (event) => {
    event.preventDefault();
    if(this.validate())
      this.previewFile();
  }

  //Tests if form is valid
  //  returns false if invalid
  //  returns true if valid
  validate = () => {
    let error = false;

    if(this.state.serviceCopy.serviceName.length < 1)
      error = true;

    if(this.state.serviceCopy.serviceDescription.length < 1)
      error = true;

    if(this.state.serviceCopy.servicePrice.value < 0)
      error = true


    if(error){
      alert("Todos os campos devem estar preenchidos!");
      return false;
    }else{
      return true;
    }

  }

  //handles service deletion
  deleteService = () => {

    //confirms deletion
    if(confirm("Tem certeza que deseja excluir o serviço "+this.state.service.serviceName+"?")){
      //delete service and hide component
      this.props.deleteService(this.state.service.id);
      this.setState(
                  {
                    deleted: true
                  }
      );

    }

  }

  //uploads picture file and updates service on "database"
  previewFile = () => {
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    var message    = document.querySelector('#file_loading_message');


    reader.addEventListener("load", () => {
      this.state.serviceCopy.servicePicture = reader.result;
      this.updateService();
    }, false);

    //file loaded correctly
    if (file) {
      reader.readAsDataURL(file);
      message.innerHTML = "Carregando imagem...";
    }else{ //if no file could be loaded, use default image
      this.state.servicePicture = "images/usuario.png";
      this.updateService();
    }
  }

  //updates service details
  updateService = () => {
    let service = {
        "id": this.state.serviceCopy.id,
        "serviceName": this.state.serviceCopy.serviceName,
        "serviceDescription": this.state.serviceCopy.serviceDescription,
        "servicePrice": this.state.serviceCopy.servicePrice,
        "servicePicture": this.state.serviceCopy.servicePicture
    }
    this.props.updateService(service);
    this.setState({serviceEditOn: false, service});

  }
  
  render(){
    if(this.state.deleted){
      return null;
    }
    let isAd = this.props.isAdmin;

    const button = isAd ? (
      <Button buttonClass="button_with_margin" text="Editar serviço" onClick={this.editService}/>
    ) :
    (

      <Button buttonClass="button_with_margin" text="Agendar" onClick={() => this.goToCalendar()} />

    )
    if (!this.state.serviceEditOn) {
      return (
        <div className="product">
  				<div className="product_left">
  					<img src={this.state.service.servicePicture} alt={this.state.service.serviceName}/>
            {button}
  				</div>

  				<div className="product_right">

  					<h2><b>{this.state.service.serviceName}</b></h2>

  					{this.state.service.serviceDescription}
  					<br/><br/>
  					<span><b>Preço :</b>R$ {Number(this.state.service.servicePrice).toFixed(2)}</span>
  				</div>
  			</div>
      )
    }
    else {
      return(
        <div className="product">
          <div className="product_left">
            <img src={this.state.serviceCopy.servicePicture} alt={this.state.serviceCopy.serviceName}/>
            <Button text="Excluir" buttonClass="delete_service_button" onClick={this.deleteService}/>
          </div>

          <div className="product_right">

          <span><b>Nome:</b> <input type="text" name="serviceName" value={this.state.serviceCopy.serviceName} onChange={this.handleChange}/> </span><br/>
          <span><b>Descrição:</b> <textarea name="serviceDescription" rows = "10" cols="40" onChange={this.handleChange} value={this.state.serviceCopy.serviceDescription}/></span><br/>
          <span><b>Preço:</b> <input type="number" min={0} step="any" name="servicePrice" value={this.state.serviceCopy.servicePrice} onChange={this.handleChange}/></span><br/><br/>
          <b>Foto: <input type="file" name="servicePicture" accept="image/*" onChange={this.handleChange}/></b>
          <span id="file_loading_message"></span><br/>
          <Button buttonClass="delete_pet_button" text="Cancelar" onClick={this.cancelEdit}/>
          <Button buttonClass="delete_pet_button" name="saveButton" onClick={this.handleSubmitService} text="Salvar"/>
          </div>
        </div>
      )
    }

  }

}


const mapStateToProps = state => {
  return { userId: state.usersReducer.userId, isAdmin: state.usersReducer.isAdmin,
    loggedin: state.usersReducer.loggedin, registeredServices: state.servicesReducer.registeredServices,
    selectedService: state.scheduledServicesReducer.selectedService};
}


export default connect(
  mapStateToProps,
  actions
)(withRouter(Service));
