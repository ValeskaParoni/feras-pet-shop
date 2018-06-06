import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import {withRouter} from 'react-router-dom';
import Button from '../../controls/Button';
import AdminServicesRow from './AdminServicesRow';
import {
  NavLink
} from "react-router-dom";
import InvalidAccessMessage from '../../controls/InvalidAccessMessage';


class AdminServices extends React.Component{

  constructor (props, context){
    super(props, context);

    this.state = {
      lowerDate: null,
      higherDate: this.getTodayDate(),
      petName: null
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

    const servicesList = []

    if (this.state.type != 'produtos'){
      this.props.scheduledServicesReducer.scheduledServices
      .filter(soldService => {
        return (!this.state.lowerDate || soldService.serviceDate >= this.state.lowerDate) && soldService.serviceDate <= this.state.higherDate
      })
      .forEach(soldService => {
          servicesList.push({
            ...soldService,
            count: 1,
            type: 'SERVICE'
          })
        
      })
    }


    return (
      <section className="content">
        <h2>Serviços Agendados</h2>
        <br/>

        <div>
          <b>Período:</b>  Inicio:<input type="date" name="begin_date" onChange={this.handleChangeLowerDate} value={this.state.lowerDate}/>   Fim:<input type="date" name="end_date" onChange={this.handleChangeHigherDate} value={this.state.higherDate}/><br/>
    
          <table id='my_pet_services'>
            <tbody>
              <tr>
                <th>Pet</th>
                <th>Id do serviço</th>
                <th>Serviço</th>
                <th>Data</th>
                <th>Horário</th>
                <th>Preço</th>
                <th>Alterar data</th>
                <th>Excluir</th>
              </tr>
              
              {servicesList.map((item, idx) => {
                  return <AdminServicesRow key={idx} service={item}/>
                
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
)(withRouter(AdminServices));
