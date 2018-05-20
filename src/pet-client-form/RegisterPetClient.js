import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Input from '../controls/Input';
import Button from '../controls/Button';
import {
  NavLink
} from "react-router-dom";

//TODO
//WHAT TO DO WHEN FORM IS SUBMITTED?
//VALIDATE FORM INPUT
//PICTURE
/*
On click functions still missing
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

  handleSubmitUser(event) {
    event.preventDefault();
    this.registerUser();   
  }



  registerUser = () => {
    //get id
    console.log("id");
    console.log(this.props.registeredUsers.length);
    //for now, using length+1 as id for new user (as users can't be deleted)
    let id = this.props.registeredUsers.length+1;

    //validate
    //check if email is unique
    //get img

    let newUser = {
        "id": id,
        "name": this.state.clientName,
        "password": this.state.clientPassword,
        "address": this.state.clientAddress,
        "email": this.state.clientEmail,
        "telephone": this.state.clientPicture,
        "isAdmin": this.state.clientIsAdmin,
        "picture": ""
    }
    this.props.addNewUser(newUser);
    this.state.formSubmitted = true;

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
        

        if(this.state.formSubmitted){
          return(
              <div>
                <p>Usuário criado com sucesso!</p>
              </div>
            );
        }

       return(
            <div>
              <h2>Cadastrar usuário</h2>
              <div>
                <div>
                  <form>
                    <b>Nome:</b> <input type="text" name="clientName" value={this.state.clientName} onChange={this.handleChange} /><br/>
                    <b>Endereço:</b> <input type="text" name="clientAddress" value={this.state.clientAddress} onChange={this.handleChange} /><br/>
                    <b>Email:</b> <input type="email" name="clientEmail" value={this.state.clientEmail} onChange={this.handleChange} /><br/>
                    <b>Senha:</b> <input type="password" name="clientPassword" value={this.state.clientPassword} onChange={this.handleChange} /><br/>
                    <b>Telefone:</b> <input type="tel" name="clientPhoneNumber" value={this.state.clientPhoneNumber} onChange={this.handleChange} /><br/>
                    <b>Administrador: </b> <input type="checkbox" name="clientIsAdmin" value={this.state.clientIsAdmin} onChange={this.handleChange} /><br/>
                    <b>Foto: <input type="file" name="clientPicture" accept="image/*" value={this.state.clientPicture} onChange={this.handleChange} /></b><br/>
                   <div id="new_pet_buttons">
                      <NavLink to="/" id='home_link'><Button buttonClass="cancel_button" text="Cancelar"/></NavLink>
                      <Button text="Confirmar" onClick={this.registerUser}/>
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
)(RegisterPetClient);