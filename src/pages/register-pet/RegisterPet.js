import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Input from '../../controls/Input';
import Button from '../../controls/Button';
import {
  NavLink
} from "react-router-dom";
import InvalidAccessMessage from '../../controls/InvalidAccessMessage';
import {withRouter} from 'react-router-dom';

/*
Page for registering a pet
Not accessible by unlogged users or admins
*/
class RegisterPet extends React.Component{
  constructor (props, context){
    super(props, context);

    this.state =  {
                    "id": "",
                    "ownerId": this.props.userId,
                    "name": "",
                    "birthdate": "",
                    "breed": "",
                    "picture": ""

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

  handleSubmitPet = (event) => {
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
      this.state.picture = reader.result;
      this.registerPet();
    }, false);

    if (file) {
      reader.readAsDataURL(file);
      message.innerHTML = "Carregando imagem...";
    }else{
      this.state.picture = "images/usuario.png";
      this.registerPet();
    }
  }

  //get the maximum value of id from the list of pets +1
  getMaxId = () => {

    let id=1;

    for(let i=0; i<this.props.pets.length; i++){
      if(this.props.pets[i].id >= id){
        id = this.props.pets[i].id + 1;
      }
    }

    return id;
  }

  //adds new user to redux
  registerPet = () => {
    //get id
    //for now, using length+1 as id for new user (as users can't be deleted)
    let id = this.getMaxId();

    let newPet = {
        "id": id,
        "ownerId": this.props.userId,
        "name": this.state.name,
        "birthdate": this.state.birthdate,
        "breed": this.state.breed,
        "picture": this.state.picture
    }
    this.props.addPet(newPet);
    
    //changes page from form into success message
    this.props.history.push("/mypets");

  }

  //Validates input
  //returns true if input is valid
  validate = () => {
    let error = false;

    if(this.state.name.length < 1)
      error = true;

    if(this.state.breed.length < 1)
      error = true;

    let petBirthdate = new Date(this.state.birthdate);
    if(petBirthdate == "Invalid Date"){
      error = true;
    }

    if(error){
      alert("Todos os campos devem estar preenchidos!");
      return false;
    }else{
      return true;
    }

  }

  render(){
       if(this.props.loggedin && !this.props.isAdmin){
         return(

                <section className="content">
                  <div>
                    <h2>Cadastrar novo pet</h2>
                    <form>
                        <b>Nome:</b> <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                        <b>Data de nascimento:</b>
                              <input type="date" name="birthdate" value={this.state.birthdate} id="dateofbirth" onChange={this.handleChange}/><br/>
                        <b>Raça:</b> <input type="text" name="breed" value={this.state.breed} list="breeds" onChange={this.handleChange}/> <br/>
                            <datalist id="breeds">
                              <option value="Golden Retriever"/>
                              <option value="Iguana verde"/>
                              <option value="Gato siamês"/>
                              <option value="Gato persa"/>
                              <option value="Hamster"/>
                            </datalist>
                        <b>Foto: <input type="file" name="picture" accept="image/*" onChange={this.handleChange} /></b>
                        <span id="file_loading_message"></span><br/>
                        <br/>
                        <div id="new_pet_buttons">
                          <NavLink to="/mypets" id='home_link'><Button buttonClass="cancel_button" text="Cancelar"/></NavLink>
                          <Button text="Confirmar" onClick={this.handleSubmitPet}/>
                        </div>
                    </form>
                  </div>
                </section>
          );
        }


        return (
          <section className="content">
            <InvalidAccessMessage/>
          </section>
        );
   

  }
}



const mapStateToProps = state => {
  return { 
          userId: state.usersReducer.userId, 
          loggedin: state.usersReducer.loggedin,
          isAdmin: state.usersReducer.isAdmin,
          pets: state.petsReducer.pets
   };
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(RegisterPet));