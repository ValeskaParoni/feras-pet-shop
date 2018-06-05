import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Button from '../controls/Button';
import {
  NavLink
} from "react-router-dom";

/*
Shows a single pet. Handles pet editing.

props:
  this.props.id: id of the pet to be shown


*/

class Pet extends React.Component{
  constructor (props, context){
    super(props, context);

    for(let i=0; i<this.props.pets.length; i++){
      if(this.props.id == this.props.pets[i].id)
        this.state= {myPet: this.props.pets[i], petEditOn: false, myPetCopy: this.props.pets[i], deleted: false, showServices: false};
    }

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let myPetCopy = {...this.state.myPetCopy}
    myPetCopy[name] = value;
    this.setState({myPetCopy});
     
  }

  showServices = () =>{
    if(this.state.showServices){
      document.getElementById("myServices"+this.props.id).style.display = "none"; 
    }else{
      document.getElementById("myServices"+this.props.id).style.display = "block"; 
    }
    this.setState({showServices: !this.state.showServices});
  }
  //get age of the pet according to birthdate
  //used to display pet age
  getAge = (dateString) =>{

    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if(m<0){
      m = 12 - m;
    }

    let ageString = age + " ano(s) "+ m+ " mes(es)";
    return ageString;
  }

  //turn pet editing on
  editPet = () =>{

    this.setState({petEditOn: true});

  }

  //cancels editing of pet and returns form values to previous state
  cancelEdit = () =>{


    let myPetCopy = {...this.state.myPetCopy}

    myPetCopy.name = this.state.myPet.name;
    myPetCopy.birthdate = this.state.myPet.birthdate; 
    myPetCopy.picture = this.state.myPet.picture; 
    myPetCopy.breed = this.state.myPet.breed;
    
    this.setState(
                  {
                    petEditOn: false, 
                    myPetCopy
                  }
    );
  }

  //Checks if form is valid and saves edits to pet
  handleSubmitPet = (event) => {
    event.preventDefault();
    if(this.validate())
      this.previewFile(); 

  }

  //Validates input
  //returns true if input is valid
  validate = () => {
    let error = false;

    if(this.state.myPetCopy.name.length < 1)
      error = true;

    if(this.state.myPetCopy.breed.length < 1)
      error = true;

    let petBirthdate = new Date(this.state.myPetCopy.birthdate);
    if(!petBirthdate){
      error = true;
    }

    if(error){
      alert("Todos os campos devem estar preenchidos!");
      return false;
    }else{
      return true;
    }

  }

  //deletes a pet
  deletePet = () => {

    //confirms deletion
    if(confirm("Tem certeza que deseja excluir o pet "+this.state.myPet.name+"?")){
      //delete pet and hide component
      this.props.deletePet(this.state.myPet.id);
      this.setState(
                  {
                    deleted: true
                  }
      );

    }

  }

  //loads picture file
  previewFile = () => {
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    var message  = document.querySelector('#file_loading_message');


    reader.addEventListener("load", () => {
      this.state.myPetCopy.picture = reader.result;
      this.updatePet();
    }, false);

    if (file) {
      reader.readAsDataURL(file);
      message.innerHTML = "Carregando imagem...";
    }else{
      this.updatePet();
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
  

  //edits user in redux
  updatePet = () => {
    
    let myPet = {
        "id": this.state.myPetCopy.id,
        "ownerId": this.state.myPetCopy.ownerId,
        "name": this.state.myPetCopy.name,
        "birthdate": this.state.myPetCopy.birthdate,
        "breed": this.state.myPetCopy.breed,
        "picture": this.state.myPetCopy.picture
    }
    this.props.updatePet(myPet);

    //switches back to view pet
    this.setState({petEditOn: false, myPet});

  }

  
  render(){
    
    //pet has been deleted
    if(this.state.deleted){
      return;
    }

    if(!this.state.petEditOn){
      
      const pStyle = {
        display: "none"
      };

        return (
          <div className="pet_profile">
            <img src={this.state.myPet.picture} alt={this.state.myPet.name}/>
            <div className="pet_info">
              <b>Nome:</b> {this.state.myPet.name}<br/>
              <b>Id:</b> {this.state.myPet.id}<br/>
              <b>Idade:</b> {this.getAge(this.state.myPet.birthdate)}<br/>
              <b>Raça:</b> {this.state.myPet.breed} <br/>              <br/>
              <div className="profile_buttons">
                <Button buttonClass="button_with_margin" text="Editar cadastro" onClick={this.editPet}/>
                <Button text="Serviços Agendados" onClick={this.showServices}/>
              </div>
              <div id={"myServices"+this.props.id} style={pStyle}>
                <table id="my_pet_services">
                <tbody>
                  <tr>
                    <th>Serviço</th>
                    <th>Data</th>
                    <th>Horário</th>
                    <th>Preço (R$)</th>
                  </tr>
              {this.props.scheduledServices.filter(service => service.petID==this.state.myPet.id).map((service)=>{
                return (<tr key={service.serviceName+service.serviceDate}>
                        <td>{service.serviceName}</td>
                        <td>{service.serviceDate}</td>
                        <td>{service.serviceTime}</td>
                        <td>{service.servicePrice}</td>
                        </tr>
                );
              })}
                </tbody>
                </table>
              </div>
            </div>
          
            <div className="clearfix"></div>
          </div>
        );

    }else{

        return (
          <div className="pet_profile">
            <img src={this.state.myPetCopy.picture} alt={this.state.myPetCopy.name}/>
            <Button text="Excluir" buttonClass="delete_pet_button" onClick={this.deletePet}/>
            <div className="pet_info">
              <b>Nome:</b> <input type="text" name="name" value={this.state.myPetCopy.name} onChange={this.handleChange}/><br/>
              <b>Data de nascimento:</b> <input type="date" name="birthdate"  max = {this.getTodayDate()} id="dateofbirth" value={this.state.myPetCopy.birthdate} onChange={this.handleChange}/><br/>
              <b>Raça:</b>  <input type="text" name="breed" list="breeds" value={this.state.myPetCopy.breed} onChange={this.handleChange}/> <br/>
                  <datalist id="breeds" >
                      <option value="Golden Retriever"/>
                      <option value="Iguana verde"/>
                    <option value="Gato siamês"/>
                      <option value="Gato persa"/>
                      <option value="Hamster"/>
                  </datalist>
              <b>Selecionar nova foto:<input type="file" name="picture" onChange={this.handleChange}/></b> 
              <span id="file_loading_message"></span><br/>
              <br/>
              <div className="profile_buttons">
                <Button buttonClass="button_with_margin" text="Cancelar" onClick={this.cancelEdit}/>
                <Button text="Confirmar" onClick={this.handleSubmitPet}/>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        );

    }
    
  }

}


const mapStateToProps = state => {
  return { pets: state.petsReducer.pets, 
          scheduledServices: state.scheduledServicesReducer.scheduledServices};
}


export default connect(
  mapStateToProps,
  actions
)(Pet);