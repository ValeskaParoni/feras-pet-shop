import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Button from '../../controls/Button';
import {withRouter} from 'react-router-dom';
import {
  NavLink
} from "react-router-dom";


//Displays a single product on a page
class Product extends React.Component{
  constructor (props, context){
    super(props, context);

    for(let i=0; i<this.props.registeredProducts.length; i++){
      if(this.props.id === this.props.registeredProducts[i].id){
        this.state= {product: this.props.registeredProducts[i], productEditOn: false, productCopy: this.props.registeredProducts[i], deleted: false};
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  //turns on product editing
  editProduct = () =>{

    this.setState({productEditOn: true});

  }

  //adds a product to cart
  addToCart = (product) =>{
    console.log('add product to cart')
    this.props.decreaseCatalogQuantity(product)
    this.props.addToCart(product)

  }

  //cancels product editing and returns data to previous state
  cancelEdit = () =>{


    let productCopy = {...this.state.productCopy}

    this.state.productCopy.productName = this.state.product.productName;
    this.state.productCopy.productDescription = this.state.product.productDescription;
    this.state.productCopy.productType = this.state.product.productType;
    this.state.productCopy.productPrice = this.state.product.productPrice;
    this.state.productCopy.productQuantity = this.state.product.productQuantity;
    this.state.productCopy.productPicture = this.state.product.productPicture;

    this.setState(
                  {
                    productEditOn: false,
                    productCopy
                  }
    );
  }

  //updates form when there's any change
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let productCopy = {...this.state.productCopy}
    productCopy[name] = value;
    this.setState({productCopy});

  }

  //Validates form and adds product to "database"
  handleSubmitProduct = (event) => {
    event.preventDefault();
    if(this.validate())
      this.previewFile();
  }

  //Tests if form is valid
  //  returns false if invalid
  //  returns true if valid
  validate = () => {
    let error = false;

    if(this.state.productCopy.productName.length < 1)
      error = true;

    if(this.state.productCopy.productDescription.length < 1)
      error = true;

    if(this.state.productCopy.productType.length < 1)
      error = true;

    if(this.state.productCopy.productPrice.value < 0)
      error = true

    if(this.state.productCopy.productQuantity.value < 0)
      error = true;

    if(error){
      alert("Todos os campos devem estar preenchidos!");
      return false;
    }else{
      return true;
    }

  }

  //handles product deletion
  deleteProduct = () => {

    //confirms deletion
    if(confirm("Tem certeza que deseja excluir o produto "+this.state.product.productName+"?")){
      //delete product and hide component
      this.props.deleteProduct(this.state.product.id);
      this.setState(
                  {
                    deleted: true
                  }
      );

    }

  }

  //uploads picture file and updates product on "database"
  previewFile = () => {
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    var message    = document.querySelector('#file_loading_message');


    reader.addEventListener("load", () => {
      this.state.productCopy.productPicture = reader.result;
      this.updateProduct();
    }, false);

    //file loaded correctly
    if (file) {
      reader.readAsDataURL(file);
      message.innerHTML = "Carregando imagem...";
    }else{ //if no file could be loaded, use default image
      this.state.productPicture = "images/usuario.png";
      this.updateProduct();
    }
  }

  //updates product details
  updateProduct = () => {
    let product = {
        "id": this.state.productCopy.id,
        "productName": this.state.productCopy.productName,
        "productDescription": this.state.productCopy.productDescription,
        "productType": this.state.productCopy.productType,
        "productPrice": this.state.productCopy.productPrice,
        "productQuantity": this.state.productCopy.productQuantity,
        "productPicture": this.state.productCopy.productPicture
    }
    this.props.updateProduct(product);
    this.setState({productEditOn: false, product});
    //changes page from form into success message
    //this.props.history.push("/products");

  }
  
  render(){
    if(this.state.deleted){
      return null;
    }
    let isAd = this.props.isAdmin;

    const button = isAd ? (
      <Button buttonClass="button_with_margin" text="Editar produto" onClick={this.editProduct}/>
    ) :
    (
      <Button buttonClass="button_with_margin" text="Adicionar ao carrinho" onClick={() => this.addToCart(this.state.productCopy)}/>
    )
    if (!this.state.productEditOn) {
      return (
        <div className="product">
  				<div className="product_left">
  					<img src={this.state.product.productPicture} alt={this.state.product.productName}/>
            <NavLink to="/cart" id='home_link'>{button}</NavLink>
  				</div>

  				<div className="product_right">

  					<h2><b>{this.state.product.productName}</b></h2>

  					{this.state.product.productDescription}
  					<br/><br/>

  					<span><b>Categoria: </b> {this.state.product.productType}</span>
  					<span><b>Preço :</b>R$ {Number(this.state.product.productPrice).toFixed(2)}</span>
  					<span><b>Quantidade disponível :</b> {Number(this.state.product.productQuantity)}</span>
  				</div>
  			</div>
      )
    }
    else {
      return(
        <div className="product">
          <div className="product_left">
            <img src={this.state.productCopy.productPicture} alt={this.state.productCopy.productName}/>
            <Button text="Excluir" buttonClass="delete_product_button" onClick={this.deleteProduct}/>
          </div>

          <div className="product_right">

          <span><b>Nome:</b> <input type="text" name="productName" value={this.state.productCopy.productName} onChange={this.handleChange}/> </span><br/>
          <span><b>Descrição:</b> <textarea name="productDescription" rows = "10" cols="40" onChange={this.handleChange} value={this.state.productCopy.productDescription}/></span><br/>
          <span><b>Categoria:</b> <input type="text" name="productType" value={this.state.productCopy.productType} onChange={this.handleChange}/></span><br/>
          <span><b>Preço:</b> <input type="number" min={0} step="any" name="productPrice" value={this.state.productCopy.productPrice} onChange={this.handleChange}/></span><br/><br/>
          <span><b>Quantidade disponível</b> <input type="number" min={0} name="productQuantity" value={this.state.productCopy.productQuantity} onChange={this.handleChange}/></span><br/>
          <b>Foto: <input type="file" name="productPicture" accept="image/*" onChange={this.handleChange}/></b>
          <span id="file_loading_message"></span><br/>
          <Button buttonClass="delete_pet_button" text="Cancelar" onClick={this.cancelEdit}/>
          <Button buttonClass="delete_pet_button" name="saveButton" onClick={this.handleSubmitProduct} text="Salvar"/>
          </div>
        </div>
      )
    }

  }

}


const mapStateToProps = state => {
  return { userId: state.usersReducer.userId, isAdmin: state.usersReducer.isAdmin,
    loggedin: state.usersReducer.loggedin, registeredProducts: state.productsReducer.registeredProducts };
}


export default connect(
  mapStateToProps,
  actions
)(Product);
