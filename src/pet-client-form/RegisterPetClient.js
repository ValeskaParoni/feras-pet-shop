import React from 'react';
import Input from '../controls/Input'
import Button from '../controls/Button'


/*
On click functions still missing
props:
  this.props.formType - "pet" for registering a pet, "client" for registering a client
*/
class RegisterProductForm extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  render(){

    if(this.props.formType=="pet"){
       return(
              <h2>Cadastrar novo pet</h2>
              <form>
                  <b>Nome:</b> <Input type="text" name="petname"/><br/>
                  <b>Data de nascimento:</b>
                        <Input type="date" name="dateofbirth" id="dateofbirth"/><br/>
                  <b>Raça:</b> <Input type="text" name="breed" list="breeds"/> <br/>
                      <datalist id="breeds"/>
                      </datalist>
                  <b>Foto: <Input type="file" name="pet_picture"></b><br/>
                  <br/>
                  <div id="new_pet_buttons">
                    <Button text="Cancelar" onClick=""/>
                    <Button text="Confirmar" onClick=""/>
                  </div>
              </form>
        );
    }else{
       return(
              <h2>Cadastrar usuário</h2>
              <div>
                <div>
                  <span><b>Nome:</b> <Input type="text" name="clientName" value=""></span><br/>
                  <span><b>Endereço:</b> <Input type="text" name="Address" value=""></span><br/>
                  <span><b>Email:</b> <Input type="email" name="email" value=""></span><br/>
                  <span><b>Telefone:</b> <Input type="tel" name="phone" value=""></span><br/>
                  <span><b>Administrador </b> <Input type="checkbox" name="isAdmin"></span><br/>
                  <b>Foto: <Input type="file" name="user_picture"></b><br/>
                  <div id="new_pet_buttons">
                    <Button text="Cancelar" onClick=""/>
                    <Button text="Confirmar" onClick=""/>
                  </div>
                </div>
              </div>
        );

    }

  }
}

export default RegisterPetClient;
