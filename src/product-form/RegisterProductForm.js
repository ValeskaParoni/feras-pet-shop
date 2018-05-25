import React from 'react';
//import Input from '../controls/Input'
import Button from '../controls/Button'
import {
  NavLink
} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions'
import {withRouter} from 'react-router-dom'
/*
On click functions still missing
*/
class RegisterProductForm extends React.Component{
  constructor (props, context){
    super(props, context);
    this.state = {
                    productName: '',
                    productDescription: '',
                    productType: '',
                    productPrice: 0,
                    productQuantity: 0,
                    productPicture: '',
                    formSubmitted: '',

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
  handleSubmitProduct = (event) => {
    event.preventDefault();
    if(this.validate())
      this.previewFile();
  }
  previewFile = () => {
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    var message    = document.querySelector('#file_loading_message');


    reader.addEventListener("load", () => {
      this.state.clientPicture = reader.result;
      this.registerProduct();
    }, false);

    if (file) {
      reader.readAsDataURL(file);
      message.innerHTML = "Carregando imagem...";
      this.state.productPicture = "images/"+this.state.productPicture.substring(0, 13);
    }else{
      this.state.productPicture = "images/usuario.png";
      this.registerProduct();
    }
}

  registerProduct = () => {
    let id = this.props.registeredProducts.length+1;
    let newProduct = {
        "id": id,
        "productName": this.state.productName,
        "productDescription": this.state.productDescription,
        "productType": this.state.productType,
        "productPrice": this.state.productPrice,
        "productQuantity": this.state.productQuantity,
        "productPicture": this.state.productPicture
    }
    this.props.addNewProduct(newProduct);

    //changes page from form into success message
    this.props.history.push("/");

  }

  validate = () => {
    let error = false;

    if(this.state.productName.length < 1)
      error = true;

    if(this.state.productDescription.length < 1)
      error = true;

    if(this.state.productType.length < 1)
      error = true;

    if(this.state.productPrice.value < 0)
      error = true

    if(this.state.productQuantity.value < 0)
      error = true;

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
          <b><h2>Cadastrar produto/serviço</h2></b>
          <span><b>Nome:</b> <input type="text" name="productName" value={this.state.productName} onChange={this.handleChange}/> </span><br/>
          <span><b>Descrição:</b> <textarea name="productDescription" rows = "10" cols="40" onChange={this.handleChange} value={this.state.product_description}/></span><br/>
          <span><b>Categoria:</b> <input type="text" name="productType" value={this.state.productType} onChange={this.handleChange}/></span><br/>
          <span><b>Preço:</b> <input type="number" min={0} step="any" name="productPrice" value={this.state.productPrice} onChange={this.handleChange}/></span><br/><br/>
          <span><b>Quantidade disponível</b> <input type="number" min={0} name="productQuantity" value={this.state.productQuantity} onChange={this.handleChange}/></span><br/>
          <b>Foto: <input type="file" name="productPicture" accept="image/*" onChange={this.handleChange}/></b>
          <span id="file_loading_message"></span><br/>
          <NavLink to="/" id='home_link'><Button buttonClass="cancel_button" text="Cancelar"/></NavLink>
          <Button name="saveButton" onClick={this.handleSubmitProduct} text="Salvar"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userId: state.usersReducer.userId, isAdmin: state.usersReducer.isAdmin,
    loggedin: state.usersReducer.loggedin, registeredProducts: state.productsReducer.registeredProducts};
};

// export default HomePage;
export default connect(
  mapStateToProps,
  actions
)(withRouter(RegisterProductForm));
