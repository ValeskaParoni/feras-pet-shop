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

const CartProduct = ({productName, productDescription, productType, productPrice, count, productPicture, increaseQuantity, decreaseQuantity}) => {

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
            <Button buttonClass="button_with_margin" text="+" onClick={increaseQuantity}/>
          </div>
        </span>
      </div>
    </div>
  )
}

class Cart extends React.Component{

  constructor (props, context){
    super(props, context);

    this.state = {
      name: '',
      cardNumber: '',
      date: '',
      cvv: '',
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value})
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
        <h2>Finalizar compra</h2>
        <br/>

        <div>
          <h3>Cartão de crédito</h3>
          <span>Nome: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/> </span><br/>
          <span>Número cartão: <input type="number" name="cardNumber" value={this.state.cardNumber} onChange={this.handleChange}/></span><br/>
          <span>Data de validade: <input type="text" name="date" value={this.state.date} onChange={this.handleChange}/></span>
          <span>CVV: <input type="number" name="cvv" value={this.state.cvv} onChange={this.handleChange}/></span><br/>
        </div>

        <span id='cart_total_value'><b>Total: </b>R${total.toFixed(2)}</span>
        <NavLink to="/" id='home_link'><Button buttonClass="button_with_margin" text="Realizar pagamento" onClick={() => {}}/> </NavLink>

        <div className="clearfix"></div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartReducer: state.cartReducer,
    loggedin: state.usersReducer.loggedin,
    isAdmin: state.usersReducer.isAdmin
  }
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(Cart));
