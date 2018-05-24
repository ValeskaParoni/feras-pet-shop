import React from 'react';
import Input from '../controls/Input'
import Button from '../controls/Button'
import {
  NavLink
} from "react-router-dom";

/*
On click functions still missing
*/
class RegisterProductForm extends React.Component{
  constructor (props, context){
    super(props, context);
    this.state = {
                    product_name: '',
                    product_description: '',
                    product_type: '',
                    product_price: 0,
                    product_quantity: 0,
                    product_picture: '',
                    form_submitted: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
   const target = event.target;
   console.log(target);
   const value = target.value;
   const name = target.name;


   this.setState({
     [name]: value
   });
 }
  render(){
    return (
      <div>
        <form>
          <b><h2>Cadastrar produto/serviço</h2></b>
          <span><b>Nome:</b> <input type="text" name="product_name" value={this.state.product_name} onChange={this.handleChange}/> </span><br/>
          <span><b>Descrição:</b> <textarea name="product_description" rows = "10" cols="40" onChange={this.handleChange}> {this.state.product_description}</textarea></span><br/>
          <span><b>Categoria:</b> <input type="text" name="product_type" value={this.state.product_type} onChange={this.handleChange}/></span><br/>
          <span><b>Preço:</b> <input type="number" min={0} step="any" name="product_price" value={this.state.product_price} onChange={this.handleChange}/></span><br/><br/>
          <span><b>Quantidade disponível</b> <input type="number" min={0} name="" value={this.state.product_quantity} onChange={this.handleChange}/></span><br/>
          <b>Foto: <input type="file" name="product_picture" accept="image/*" onChange={this.handleChange}/>></b><br/>
          <NavLink to="/" id='home_link'><Button buttonClass="cancel_button" text="Cancelar"/></NavLink>
          <Button name="saveButton" onClick="" text="Salvar"/>
        </form>
      </div>
    );
  }
}

export default RegisterProductForm;
