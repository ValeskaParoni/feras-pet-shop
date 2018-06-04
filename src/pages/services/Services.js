import React from 'react';
import RegisterServiceForm from '../../service-form/RegisterServiceForm'
import Service from './Service'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import {withRouter} from 'react-router-dom';
import Button from '../../controls/Button';
import {
  NavLink
} from "react-router-dom";

//Services page
class Services extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
    let but;
    if (this.props.isAdmin == true) {
      but = <NavLink to="/registerServices" id='register_service_link'><Button buttonClass="register_service_button" text="Adicionar serviço"/></NavLink>
    }
    return (
          <section className="content">
          <h2>Serviços</h2>
          {but}
          <br/>
          {this.props.registeredServices.map((service)=>{
              return (<Service id={service.id} key={service.id}/>);
          })}
          <div className="clearfix"></div>
          </section>
    );

  }

}
const mapStateToProps = state => {
  return { userId: state.usersReducer.userId, isAdmin: state.usersReducer.isAdmin,
    loggedin: state.usersReducer.loggedin, registeredServices: state.servicesReducer.registeredServices };
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(Services));
