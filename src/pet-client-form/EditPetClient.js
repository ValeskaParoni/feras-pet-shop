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
class EditPetClient extends React.Component{
  constructor (props, context){
    super(props, context);

    if(this.props.formType=="client"){
      //get client data
      //should change this if id isn't position+1 any longer
      this.state = {currentUser: this.props.registeredUsers[this.props.userId-1]};
    }

    this.handleChange = this.handleChange.bind(this);
  }

   handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if(this.props.formType=="client"){  
      
      var currentUser = {...this.state.currentUser}
      currentUser[name] = value;
      this.setState({currentUser});
    
    }else{
        this.setState({
          [name]: value
        });
    }


    
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
      this.state.currentUser.picture = reader.result;
      this.updateUser();
    }, false);

    if (file) {
      reader.readAsDataURL(file);
      message.innerHTML = "Carregando imagem...";
    }else{
      this.updateUser();
    }
  }


  //edits user in redux
  updateUser = () => {
    
    let updatedUser = {
        "id": this.state.currentUser.id,
        "name": this.state.currentUser.name,
        "password": this.state.currentUser.password,
        "address": this.state.currentUser.address,
        "email": this.state.currentUser.email,
        "telephone": this.state.currentUser.telephone,
        "isAdmin": this.state.currentUser.isAdmin,
        "picture": this.state.currentUser.picture
    }
    this.props.updateUser(updatedUser);
    
    //changes page from form into success message
    this.props.history.push("/dataUpdated");

  }

    //checks if email is unique
  checkEmail = () => {
    for (let i = 0; i < this.props.registeredUsers.length; i++)
      if(this.state.currentUser.email == this.props.registeredUsers[i].email && i != this.state.currentUser.id )
        return false;

    return true;
  }

  //Validates input
  //returns true if input is valid
  validate = () => {
    let error = false;

    if(this.state.currentUser.name.length < 1)
      error = true;

    if(this.state.currentUser.password.length < 1)
      error = true;

    if(this.state.currentUser.address.length < 1)
      error = true;

    if(!document.getElementById("client_email").validity.valid){
      alert("Email preenchido incorretamente!");
      return false;
    }

    if(this.state.currentUser.telephone.length < 1)
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
              <h2>Editar usuário</h2>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <img src={this.state.currentUser.picture} alt="Foto do usuário" style={{width: '20%', height: '20%'}}/>
                <div>
                  <form>
                    <b>Nome:</b> <input type="text" name="name" value={this.state.currentUser.name} onChange={this.handleChange}/><br/>
                    <b>Endereço:</b> <input type="text" name="address" value={this.state.currentUser.address} onChange={this.handleChange} /><br/>
                    <b>Email:</b> <input id="client_email" type="email" name="email" value={this.state.currentUser.email} onChange={this.handleChange} /><br/>
                    <b>Senha:</b> <input type="password" name="password" value={this.state.currentUser.password} onChange={this.handleChange} /><br/>
                    <b>Telefone:</b> <input type="tel" name="telephone" value={this.state.currentUser.telephone} onChange={this.handleChange} /><br/>
                    <b>Foto: <input type="file" name="picture" accept="image/*" onChange={this.handleChange} /></b>
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
  return { registeredUsers: state.usersReducer.registeredUsers,
           loggedin: state.usersReducer.loggedin,
           userId: state.usersReducer.userId,
           userName: state.usersReducer.userName
  };
}


export default connect(
  mapStateToProps,
  actions
)(withRouter(EditPetClient));