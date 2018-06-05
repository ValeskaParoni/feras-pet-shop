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


//Shopping cart page
class ServicePayment extends React.Component{

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


  handleServicePayment = () => {
    if(this.validate()){
            //changes page from form into success message
        this.props.scheduleService(this.props.service);
        this.props.history.push("/paymentSuccess");
    }
  }

  //Validates input
  //returns true if input is valid
  validate = () => {
    let error = false;

    if(this.state.name.length < 1)
      error = true;

    if(this.state.cardNumber.length != 16)
        error = true;

    if(this.state.cvv.length <1)
        error = true;

    let creditCardDate = new Date(this.state.date);
    console.log(creditCardDate);
    if(creditCardDate=="Invalid Date"){
      alert("Data inválida!");
      return false;
    }

    if(error){
      alert("Todos os campos devem estar preenchidos!");
      return false;
    }else{
      return true;
    }

  }

  render(){
    if (!this.props.loggedin || this.props.isAdmin){
      return (
        <section className="content">
          <InvalidAccessMessage/>
        </section>
      )
    }

    const total = this.props.service.servicePrice;

    return (
      <section className="content">
        <h2>Finalizar compra</h2>
        <br/>

        <div>
          <h3>Cartão de crédito</h3>
          <span>Nome: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/> </span><br/>
          <span>Número cartão: <input type="number" name="cardNumber" value={this.state.cardNumber} onChange={this.handleChange}/></span><br/>
          <span>Data de validade (AAAA-MM): <input type="month" name="date" value={this.state.date} onChange={this.handleChange}/></span><br/>
          <span>CVV: <input type="number" name="cvv" value={this.state.cvv} onChange={this.handleChange}/></span><br/>
        </div>

        <span id='cart_total_value'><b>Total: </b>R${total.toFixed(2)}</span>
        <Button buttonClass="button_with_margin" text="Realizar pagamento" onClick={this.handleServicePayment}/> 

        <div className="clearfix"></div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    service: state.cartReducer.service,
    loggedin: state.usersReducer.loggedin,
    isAdmin: state.usersReducer.isAdmin
  }
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(ServicePayment));
