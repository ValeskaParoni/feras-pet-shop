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

const ListItem = ({name, type, quantity, price}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{type}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{quantity*price}</td>
    </tr>
  )
}

class History extends React.Component{

  constructor (props, context){
    super(props, context);

    this.state = {
      lowerDate: null,
      higherDate: this.getTodayDate()
    }
  }

  handleChangeLowerDate = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({"lowerDate": value});
  }

  handleChangeHigherDate = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({"higherDate": value});
  }

  handleChangePicker = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({"type": value});
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

  getTheDate = (date) => {
    date = new Date(date)
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();
     if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

    return yyyy+'-'+mm+'-'+dd;
  }

  render(){
    console.log('state', this.state)
    const productsList = []

    if (this.state.type != 'servicos'){
      this.props.ordersReducer.soldProducts
      .filter(soldProduct => {
        return (!this.state.lowerDate || this.getTheDate(soldProduct.date) >= this.state.lowerDate) && this.getTheDate(soldProduct.date) <= this.state.higherDate
      })
      .forEach(soldProduct => {
        const search = productsList.find(product => product.id == soldProduct.id)

        if (search){
          search.count += soldProduct.count
        } else {
          productsList.push({
            ...soldProduct,
            type: 'PRODUCT',
          })
        }
      })
    }
    const servicesList = []

    if (this.state.type != 'produtos'){
      this.props.scheduledServicesReducer.scheduledServices
      .filter(soldService => {
        return (!this.state.lowerDate || soldService.serviceOrderDate >= this.state.lowerDate) && soldService.serviceOrderDate <= this.state.higherDate
      })
      .forEach(soldService => {
        const search = servicesList.find(service => service.serviceName == soldService.serviceName)

        if (search){
          search.count++
        } else {
          servicesList.push({
            ...soldService,
            count: 1,
            type: 'SERVICE'
          })
        }
      })
    }

    const list = [...productsList, ...servicesList].sort((a,b) => a.count < b.count)

    // if (!this.props.loggedin || !this.props.isAdmin){
    //   return (
    //     <section className="content">
    //       <InvalidAccessMessage/>
    //     </section>
    //   )
    // }

    return (
      <section className="content">
        <h2>Histórico de vendas</h2>
        <br/>

        <div>
          Período:  Inicio:<input type="date" name="begin_date" onChange={this.handleChangeLowerDate} value={this.state.lowerDate}/>   Fim:<input type="date" name="end_date" onChange={this.handleChangeHigherDate} value={this.state.higherDate}/><br/>
          Tipo:
          <select onChange={this.handleChangePicker}>
            <option value="todos">Todos</option>
            <option value="servicos">Serviços</option>
            <option value="produtos">Produtos</option>
          </select>

          <table id='my_pet_services'>
            <tbody>
              <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Quantidade</th>
                <th>Preço unitário</th>
                <th>Subtotal</th>
              </tr>

              {list.map((item, idx) => {
                if (item.type=='PRODUCT'){
                  return <ListItem key={idx} name={item.productName} type='Produto' quantity={item.count} price={item.productPrice}/>
                } else {
                  return <ListItem key={idx} name={item.serviceName} type='Serviço' quantity={item.count} price={item.servicePrice}/>
                }
              })}
            </tbody>
          </table>
        </div>

        <div className="clearfix"></div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    registeredProducts: state.productsReducer.registeredProducts,
    ordersReducer: state.ordersReducer,
    scheduledServicesReducer: state.scheduledServicesReducer
  }
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(History));
