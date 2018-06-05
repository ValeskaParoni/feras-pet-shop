import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as calendarActions from '../../actions/calendarActions';

/*
 * props:
 * * data: EMPTY ou o serviço marcado naquele dia
 * */

class Appointment extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  
  sendDataToStore = () => {
    this.props.actions.setAppointmentDateTime(this.props.date, this.props.time);
  }
  
  render(){
    let innerHTMLvalue;
    let classNames = 'calendar-item';
    if (this.props.data == 'EMPTY'){
      return (<td onClick={this.sendDataToStore} className='calendar-item empty'><button>Selecionar</button></td>);
    }
    return(<td className='calendar-item'>
             <div className='calendar-service-name'>{this.props.data.serviceName}</div>
             <img className='appointment-img' src={'./../../images/' + this.props.data.imageSrc}/>
             <div className='calendar-client-name'>{this.props.data.clientName}</div>
           </td>);
   }
}

              
function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(calendarActions, dispatch)};
}

function mapStateToProps(state, ownProps) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
