import React from 'react';
import Button from '../controls/Button';
import {
  NavLink
} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';
import {withRouter} from 'react-router-dom';


/*
  Form for adding new services to "database"
*/
class RegisterServiceForm extends React.Component{
  constructor (props, context){
    super(props, context);
    this.state = {
                    serviceName: '',
                    serviceDescription: '',
                    servicePrice: 0,
                    servicePicture: '',
                    formSubmitted: '',

    };
    this.handleChange = this.handleChange.bind(this);
  }

  //updates form
  handleChange(event) {
   const target = event.target;
   const value = target.value;
   const name = target.name;


   this.setState({
     [name]: value
   });
  }

  //checks if form is valid, uploads picture and saves service to "database"
  handleSubmitService = (event) => {
    event.preventDefault();
    if(this.validate())
      this.previewFile();
  }

  //loads picture file
  previewFile = () => {
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    var message    = document.querySelector('#file_loading_message');


    reader.addEventListener("load", () => {
      this.state.servicePicture = reader.result;
      this.registerService();
    }, false);

    if (file) {
      reader.readAsDataURL(file);
      message.innerHTML = "Carregando imagem...";
    }else{
      this.state.servicePicture = "images/usuario.png";
      this.registerService();
    }
  }

  //add new service
  registerService = () => {
    let id = this.props.registeredServices.length+1;
    let newService = {
        "id": id,
        "serviceName": this.state.serviceName,
        "serviceDescription": this.state.serviceDescription,
        "servicePrice": this.state.servicePrice,
        "servicePicture": this.state.servicePicture
    }
    this.props.addNewService(newService);

    //changes page back to services page
    this.props.history.push("/services");

  }

  //validates form data
  validate = () => {
    let error = false;

    if(this.state.serviceName.length < 1)
      error = true;

    if(this.state.serviceDescription.length < 1)
      error = true;

    if(this.state.servicePrice.value < 0)
      error = true

    if(error){
      alert("Todos os campos devem estar preenchidos!");
      return false;
    }else{
      return true;
    }

  }


  render(){
    return (
      <div>
        <form>
          <b><h2>Cadastrar serviço</h2></b>
          <span><b>Nome:</b> <input type="text" name="serviceName" value={this.state.serviceName} onChange={this.handleChange}/> </span><br/>
          <span><b>Descrição:</b> <textarea name="serviceDescription" rows = "10" cols="40" onChange={this.handleChange} value={this.state.serviceDescription}/></span><br/>
          <span><b>Preço:</b> <input type="number" min={0} step="any" name="servicePrice" value={this.state.servicePrice} onChange={this.handleChange}/></span><br/>
          <b>Foto: <input type="file" name="servicePicture" accept="image/*" onChange={this.handleChange}/></b>
          <span id="file_loading_message"></span><br/>
          <NavLink to="/services" id='services_link'><Button buttonClass="cancel_button" text="Cancelar"/></NavLink>
          <Button name="saveButton" onClick={this.handleSubmitService} text="Salvar"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userId: state.usersReducer.userId, isAdmin: state.usersReducer.isAdmin,
    loggedin: state.usersReducer.loggedin, registeredServices: state.servicesReducer.registeredServices};
};

// export default HomePage;
export default connect(
  mapStateToProps,
  actions
)(withRouter(RegisterServiceForm));
