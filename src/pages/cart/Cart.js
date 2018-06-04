import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import {withRouter} from 'react-router-dom';
import Button from '../../controls/Button';
import {
  NavLink
} from "react-router-dom";
//import styles from '../styles.css';
import InvalidAccessMessage from '../../controls/InvalidAccessMessage';


//Shopping cart
const CartProduct = ({productName, productDescription, productType, productPrice, count, productPicture, increaseQuantity, decreaseQuantity, productQuantity}) => {

  return (
    <div className="product">
      <div className="product_left">
        <img src={productPicture} alt={productName}/>
      </div>
      <div className="product_right">
        <h2><b>{productName}</b></h2>
        {productDescription}
        <br/><br/>
        <span><b>Categoria: </b> {productType}</span>
        <span><b>Preço :</b>R$ {Number(productPrice).toFixed(2)}</span>
        <span><b>Quantidade</b>
          <div>
            <Button buttonClass="button_with_margin" text="-" onClick={decreaseQuantity}/>
            <span> {count} </span>
            <Button buttonClass="button_with_margin" text="+" onClick={increaseQuantity} disabled={productQuantity<=0}/>
          </div>
        </span>
      </div>
    </div>
  )
}

class Cart extends React.Component{

  constructor (props, context){
    super(props, context);
  }

  render(){

    if (!this.props.loggedin || this.props.isAdmin){
      return (
        <section className="content">
          <InvalidAccessMessage/>
        </section>
      )
    }

    const total = this.props.cartReducer.cart
                                        .map(product => parseFloat(product.productPrice) * parseInt(product.count))
                                        .reduce((prev, next) => prev+next, 0)

    return (
      <section className="content">
        <h2>Carrinho de compras</h2>
        <br/>
        {this.props.cartReducer.cart.map((product, idx) => (
          <CartProduct 
            {...product}
            increaseQuantity={() => {
              this.props.decreaseCatalogQuantity(product)
              this.props.addToCart(product)
            }}
            decreaseQuantity={() => {
              this.props.increaseCatalogQuantity(product)
              this.props.decreaseCartQuantity(product)
            }}
            productQuantity={this.props.registeredProducts.find(p=>p.id==product.id).productQuantity}
            key={idx}
          />
        ))}
        {this.props.cartReducer.cart.length>0
        ?
        <div>
          <span id='cart_total_value'><b>Total: </b>R${total.toFixed(2)}</span>
          <NavLink to="/payment" id='home_link'><Button buttonClass="button_with_margin" text="Finalizar"/> </NavLink>
        </div>
        :
        <span>Seu carrinho está vazio!</span>
        }

        <div className="clearfix"></div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartReducer: state.cartReducer,
    loggedin: state.usersReducer.loggedin,
    isAdmin: state.usersReducer.isAdmin,
    registeredProducts: state.productsReducer.registeredProducts
  }
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(Cart));
