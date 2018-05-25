import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Button from '../../controls/Button';
import {withRouter} from 'react-router-dom';
import {
  NavLink
} from "react-router-dom";
/*
props:
  this.props.id: id of the pet to be shown

  TODO: add next service
*/

class Product extends React.Component{
  constructor (props, context){
    super(props, context);

    for(let i=0; i<this.props.registeredProducts.length; i++){
      if(this.props.id === this.props.registeredProducts[i].id){
        this.state= {product: this.props.registeredProducts[i]};
        console.log(this.props.registeredProducts[i].productPicture)
      }
    }

  }



  render(){
    let isAd = this.props.isAdmin;
    const button = isAd ? (
      <NavLink to="/" id='edit_product_link'><Button buttonClass="edit_product_button" text="Editar produto"/></NavLink>
    ) :
    (
      <NavLink to="/" id='add'><Button buttonClass="add" text="Adicionar ao carrinho"/></NavLink>
    )
    return (
      <div className="product">
				<div className="product_left">
					<img src={this.state.product.productPicture} alt={this.state.product.productName}/>
          {button}
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

}


const mapStateToProps = state => {
  return { userId: state.usersReducer.userId, isAdmin: state.usersReducer.isAdmin,
    loggedin: state.usersReducer.loggedin, registeredProducts: state.productsReducer.registeredProducts };
}


export default connect(
  mapStateToProps,
  actions
)(Product);
