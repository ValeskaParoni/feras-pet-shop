import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Input from '../controls/Input';
import Button from '../controls/Button';
import {
  NavLink
} from "react-router-dom";
import {withRouter} from 'react-router-dom'

/*
props:
  this.props.formType - "pet" for registering a pet, "client" for registering a client
*/
class RegisterPetClient extends React.Component{
  constructor (props, context){
    super(props, context);

    this.state =  {
                    clientName: '', 
                    clientAddress: '',
                    clientEmail: '',
                    clientPassword: '',
                    clientPhoneNumber: '',
                    clientIsAdmin: '',
                    clientPicture: '',
                    formSubmitted: false

                  };

    this.handleChange = this.handleChange.bind(this);
  }

   handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;


    this.setState({
      [name]: value
    });
  }

  handleSubmitUser = (event) => {
    event.preventDefault();
    if(this.validate())
      this.previewFile(); 

  }


  //loads file
  previewFile = () => {
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    var message    = document.querySelector('#file_loading_message');


    reader.addEventListener("load", () => {
      this.state.clientPicture = reader.result;
      this.registerUser();
    }, false);

    if (file) {
      reader.readAsDataURL(file);
      message.innerHTML = "Carregando imagem...";
    }else{
      this.state.clientPicture = "";
      this.registerUser();
    }
  }


  //adds new user to redux
  registerUser = () => {
    //get id
    //for now, using length+1 as id for new user (as users can't be deleted)
    let id = this.props.registeredUsers.length+1;

    let newUser = {
        "id": id,
        "name": this.state.clientName,
        "password": this.state.clientPassword,
        "address": this.state.clientAddress,
        "email": this.state.clientEmail,
        "telephone": this.state.clientPhoneNumber,
        "isAdmin": this.state.clientIsAdmin,
        "picture": this.state.clientPicture
    }
    this.props.addNewUser(newUser);
    
    //changes page from form into success message
    this.props.history.push("/userSuccess");

  }

  //Validates input
  //returns true if input is valid
  validate = () => {
    let error = false;

    if(this.state.clientName.length < 1)
      error = true;

    if(this.state.clientPassword.length < 1)
      error = true;

    if(this.state.clientAddress.length < 1)
      error = true;

    if(!document.getElementById("client_email").validity.valid){
      alert("Email preenchido incorretamente!");
      return false;
    }

    if(this.state.clientPhoneNumber.length < 1)
      error = true;

    if(error){
      alert("Todos os campos devem estar preenchidos!");
      return false;
    }else{
      return true;
    }

  }

  render(){
    if(this.props.formType=="pet"){
       return(
              <div>
              <h2>Cadastrar novo pet</h2>
              <form>
                  <b>Nome:</b> <Input type="text" name="petname"/><br/>
                  <b>Data de nascimento:</b>
                        <Input type="date" name="dateofbirth" id="dateofbirth"/><br/>
                  <b>Raça:</b> <Input type="text" name="breed" list="breeds"/> <br/>
                      <datalist id="breeds">
                      </datalist>
                  <b>Foto: <Input type="file" name="pet_picture"/></b><br/>
                  <br/>
                  <div id="new_pet_buttons">
                    <Button text="Cancelar" onClick=""/>
                    <Button text="Confirmar" onClick=""/>
                  </div>
              </form>
              </div>
        );
    }else{

       return(
            <div>
              <h2>Cadastrar usuário</h2>
              <div id="user_form">
                <div>
                  <form>
                    <b>Nome:</b> <input type="text" name="clientName" value={this.state.clientName} onChange={this.handleChange}/><br/>
                    <b>Endereço:</b> <input type="text" name="clientAddress" value={this.state.clientAddress} onChange={this.handleChange} /><br/>
                    <b>Email:</b> <input id="client_email" type="email" name="clientEmail" value={this.state.clientEmail} onChange={this.handleChange} /><br/>
                    <b>Senha:</b> <input type="password" name="clientPassword" value={this.state.clientPassword} onChange={this.handleChange} /><br/>
                    <b>Telefone:</b> <input type="tel" name="clientPhoneNumber" value={this.state.clientPhoneNumber} onChange={this.handleChange} /><br/>
                    <b>Administrador: </b> <input type="checkbox" name="clientIsAdmin" value={this.state.clientIsAdmin} onChange={this.handleChange} /><br/>
                    <b>Foto: <input type="file" name="clientPicture" accept="image/*" onChange={this.handleChange} /></b>
                      <span id="file_loading_message"></span><br/>
                   <div id="new_pet_buttons">
                      <NavLink to="/" id='home_link'><Button buttonClass="cancel_button" text="Cancelar"/></NavLink>
                      <Button text="Confirmar" onClick={this.handleSubmitUser}/>
                    </div>
                  </form>
                </div>
             
              </div>
            </div>
        );

    }

  }
}



const mapStateToProps = state => {
  return { registeredUsers: state.usersReducer.registeredUsers };
};


export default connect(
  mapStateToProps,
  actions
)(withRouter(RegisterPetClient));