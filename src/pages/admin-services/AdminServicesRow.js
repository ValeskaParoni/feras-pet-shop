import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import {withRouter} from 'react-router-dom';
import Button from '../../controls/Button';
import {
  NavLink
} from "react-router-dom";

/*Row for admin services table
  Props: 
    -this.props.service: the scheduled service this represents

*/
class AdminServicesRow extends React.Component{
  constructor (props, context){
    super(props, context);

    this.state = {deleted: false};
  }

  deleteScheduledService = () => {
    if(confirm("Tem certeza que deseja cancelar esse serviço?")){
      this.props.removeScheduledService(this.props.service.id);
      this.setState({deleted: true});
    }

  }

  modifyScheduledService = () => {

    this.props.setService(this.props.service);
    this.props.history.push("/updateScheduledService");
  }

  render(){

    if(!this.state.deleted){
      return (
        <tr>
          <td>{this.props.service.petName}</td>
          <td>{this.props.service.id}</td>
          <td>{this.props.service.serviceName}</td>
          <td>{this.props.service.serviceDate}</td>
          <td>{this.props.service.serviceTime}</td>
          <td>{this.props.service.servicePrice}</td>
          <td><Button text="Alterar" onClick={this.modifyScheduledService}/></td>
          <td><Button text="Excluir" onClick={this.deleteScheduledService}/></td>
        </tr>
      );
    }
 
  }

}
const mapStateToProps = state => {
  return { userId: state.usersReducer.userId, isAdmin: state.usersReducer.isAdmin,
    loggedin: state.usersReducer.loggedin, registeredServices: state.servicesReducer.registeredServices };
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(AdminServicesRow));
